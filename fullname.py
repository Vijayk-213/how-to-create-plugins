import sys
import json

class Fullname:
    def __init__(self, fName, lName):
        self.fName = fName
        self.lName = lName
        
    def display_name(self):
        return self.fName + " " + self.lName

if __name__ == "__main__":
    try:
        # Print the raw command-line argument for debugging
        print(f"Raw input: {sys.argv[1]}")

        # Read input from command line
        input_data = json.loads(sys.argv[1])

        fName = input_data.get("fName", "")
        lName = input_data.get("lName", "")

        # Create Fullname instance and print the result
        fullname = Fullname(fName, lName)
        print(fullname.display_name())
    except Exception as e:
        print(f"Error: {e}")
