// Import required core Node.js modules
const os = require('os');
const path = require('path');
const fs = require('fs');

// SECTION 1: Log System Information
console.log('-------- SYSTEM INFORMATION --------');
const computerPlatform = os.platform();
const computerArch = process.arch;

// Display system information in the console
console.log(`Platform: ${computerPlatform}, Architecture: ${computerArch}`);

// SECTION 2: Construct a File Path
console.log('\n-------- PATH CONSTRUCTION --------');
// Define path segments to join
const folderPath = './info_files';
const fileName = 'computer_info.txt';

// Join paths using the path module
const fullPath = path.join(folderPath, fileName);
console.log(`Joined path: ${fullPath}`);

// SECTION 3: Create and Write to a File
console.log('\n-------- FILE CREATION --------');

// Prepare content to write to the file
const fileContent = `System Info Log
Platform: ${computerPlatform}
Architecture: ${computerArch}`;

// Make sure the directory exists first (with error handling)
fs.mkdir(folderPath, { recursive: true }, (err) => {
  if (err && err.code !== 'EEXIST') {
    console.error(`Error creating directory: ${err.message}`);
    return;
  }
  
  // Write to file asynchronously with error handling
  fs.writeFile(fullPath, fileContent, (err) => {
    if (err) {
      console.error(`Error writing to file: ${err.message}`);
      return;
    }
    
    console.log(`File successfully created at: ${fullPath}`);
    
    // SECTION 4: Read and Log File Contents
    console.log('\n-------- FILE CONTENTS --------');
    
    // Read the file we just created (asynchronously)
    fs.readFile(fullPath, 'utf8', (err, data) => {
      if (err) {
        console.error(`Error reading file: ${err.message}`);
        return;
      }
      
      // Display the file contents
      console.log('File contents:');
      console.log(data);
      console.log(`Assignment complete!`);
    });
  });
});