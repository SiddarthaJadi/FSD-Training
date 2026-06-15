const fs = require('node:fs/promises');
//fs.writeFileSync("sample.txt","Welcome to fs Module of Node");
// fs.writeFile("sample.txt","Welcome to Bharat",(err)=>{
//     if(err){
//         console.log('Error in Writing to File')
//     }
//     console.log('File Written Successfully')
// })

// let data=fs.readFileSync("sample.txt","utf-8");
// console.log(data);
// fs.readFile("sample.txt","utf-8",(err,data)=>{
//     if(err){
//         console.log("Error in Reading file...");
//     }
//     else{
//         console.log(data);
//     }
// })
// fs.appendFile("sample.txt",'\n Updating the File with this line itself',(err)=>{
//     if(err){
//         console.log("Error in Appending");
//     }
//     else{
//         console.log("Succesfully Updated the Content");
//     }
// });
fs.readFile('sample.txt','utf-8').then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})