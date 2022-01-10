const fs = require("fs")
const process = require('process')


     fs.readdir(process.argv[2],{ withFileTypes: true },(err,files)=>{
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