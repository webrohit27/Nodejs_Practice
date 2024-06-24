 const { log } = require("console");
 const fs = require("fs"); 
 const os = require('os'); 

 console.log(os.cpus().length);

 // Sync...
 fs.writeFileSync("./test.txt", "Hello boys");

 // Async...
fs.writeFile("./test.txt", "Hello boys Async", (err)=>{});

const result = fs.readFileSync("./contact.txt", "utf-8")
console.log(result);

fs.readFile("./contact.txt", "utf-8", (err, result) => {
    if (err) {
        console.log("error", err);
    }else{
        console.log(result);
    }
});


