const fs = require("fs")
const process = require('process')


     fs.readdir("C:\\Users\\nadish kumar\\Desktop\\B29WD",{ withFileTypes: true },(err,files)=>{
        if(err) throw err;
        console.log(files);
        files.map((ele)=>{
            if(ele.isFile()){
                console.log(`${ele.name} : File`);
            }
            else{
                console.log(`${ele.name}: Folder`);
            }
        })
    })