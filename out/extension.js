"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
const vscode = __importStar(require("vscode"));
const child_process_1 = require("child_process");
const path = __importStar(require("path"));
function activate(context) {
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
        (0, child_process_1.exec)(pythonCommand, (error, stdout, stderr) => {
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
function deactivate() { }
//# sourceMappingURL=extension.js.map