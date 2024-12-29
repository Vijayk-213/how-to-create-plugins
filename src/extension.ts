import * as vscode from 'vscode';
import { exec } from 'child_process';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand('fullnameDisplay.showFullName', async () => {
    // Prompt the user for first name and last name
    const fName = await vscode.window.showInputBox({ prompt: 'Enter First Name' });
    const lName = await vscode.window.showInputBox({ prompt: 'Enter Last Name' });

    if (!fName || !lName) {
      vscode.window.showErrorMessage('Both First Name and Last Name are required!');
      return;
    }

    // Prepare input JSON
    const inputJson = JSON.stringify({ fName, lName });

    // Get the absolute path to the Python script
    const pythonScriptPath = path.join(context.extensionPath, 'fullname.py');

    // Construct the Python command with escaped double quotes for the JSON string
    const pythonCommand = `python "${pythonScriptPath}" "${inputJson.replace(/"/g, '\\"')}"`;

    console.log(`Executing command: ${pythonCommand}`); // Debugging

    // Execute the Python script
    exec(pythonCommand, (error, stdout, stderr) => {
      if (error) {
        vscode.window.showErrorMessage(`Error: ${error.message}`);
        console.error(`Error: ${error.message}`);
        return;
      }
      if (stderr) {
        vscode.window.showErrorMessage(`stderr: ${stderr}`);
        console.error(`stderr: ${stderr}`);
        return;
      }
      vscode.window.showInformationMessage(`Full Name: ${stdout.trim()}`);
    });
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
