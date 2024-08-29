## Clutter Clear Tool (Node.js)

This Node.js tool helps you organize files within a specified directory by automatically categorizing them into subdirectories based on their file extensions. It's a great way to declutter your workspace and keep your files neatly organized.

### Features

- **Automatic file sorting:** Files are automatically sorted into directories based on their extensions (e.g., `.jpg`, `.png`, `.pdf`, etc.).
- **Efficient processing:** Utilizes asynchronous operations for fast performance.
- **Error handling:** Ensures smooth operation and provides informative messages in case of issues.
- **Easy to use:** No complex configuration required.

### Benefits

- **Improved organization:** Keeps your files categorized for easier access and management.
- **Saves time:** Streamlines the process of organizing large file collections.
- **Boosts productivity:** Reduces clutter and helps you focus on what matters.

### Usage

1. **Prerequisites:** Node.js and npm (or yarn) installed on your system.
2. **Clone or download the repository:** (if applicable)
3. **Install dependencies:**
   ```bash
   npm install
Use code with caution.

Run the tool:
Bash
node organize_files.js
Use code with caution.

(Replace organize_files.js with the actual filename if different.)
Note: The tool currently sorts all files except those with extensions .js and .json (to avoid modifying the script itself). You can customize this behavior by modifying the code.

How it works
The script iterates through the specified directory and checks each file's extension. If the extension is not .js, .json, or empty, it creates a new directory with that name (jpg, pdf, etc.) if it doesn't exist, and then moves the file into that directory.

Contributing
Feel free to fork the repository and submit pull requests with improvements or bug fixes.