# Create Your Plugin for Python Code

This repository contains a TypeScript plugin that invokes a Python script to generate a full name by combining a first name and last name passed as parameters.

---

## Features

- **TypeScript Plugin**: A seamless integration for executing Python scripts from a TypeScript environment.
- **Python Backend**: A Python script (`fullname.py`) processes the input and returns the concatenated full name.
- **Cross-Language Communication**: Demonstrates interoperability between TypeScript and Python.

---

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher): [Download and Install Node.js](https://nodejs.org/)
- **Python** (v3.6 or higher): [Download and Install Python](https://www.python.org/)
- **Git**: [Download and Install Git](https://git-scm.com/)

---

## Installation

### 1. Clone the Repository

Clone this repository to your local machine using Git:

```bash
# Clone the repository
git clone https://github.com/Vijayk-213/how-to-create-plugins

# Navigate to the project directory
cd fullname-plugin
```



### 2. Install Dependencies

Install the necessary Node.js packages:

```bash
# Install TypeScript and other dependencies
npm install
```



---

## Usage

### 1. Run the Python Script Directly

The Python script (`fullname.py`) can be executed standalone to test its functionality:

```bash
python fullname.py "FirstName" "LastName"
```

For example:

```bash
python fullname.py John Doe
```

Output:

```
Full Name: John Doe
```



### 2. Use with the TypeScript Plugin

Run the TypeScript script to test integration:

```bash
npm start
```

You should see the full name generated in the console.

---

## File Structure

```plaintext
fullname-plugin/
├── src/
│   ├── index.ts         # Main TypeScript entry point
│   ├── pythonRunner.ts  # Utility for running Python scripts
├── fullname.py          # Python script for generating full names
├── package.json         # Node.js dependencies and scripts
├── tsconfig.json        # TypeScript configuration
└── README.md            # Project documentation
```

---




## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m "Add new feature"`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.


---

## Contact

For questions or support, contact [Vijay Kumar](mailto:kumarvijay.vk1998@gmail.com) or visit [GitHub Profile](https://github.com/Vijayk-213).
