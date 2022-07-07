//console.log("Hello World")
const fs=require('fs')//built in functionality (file system)==require is used to import the fs (file system module)
fs.writeFileSync('hello.txt','Hello from Nodejs')//writes a method to our harddrive  
//the above method creates a txt file with Hello from Node.js as a text inside 