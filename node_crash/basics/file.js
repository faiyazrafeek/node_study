const fs = require('fs');

// reading files
fs.readFile('./note.txt', (err, data) => {
    if(err){
        console.log(err);
    }
    console.log(data.toString());
});

console.log('last line');

// writing files
fs.writeFile('./note.txt', 'New Text from FS Node.js', () => {
    console.log('file was written');
});

fs.writeFile('./notes.txt', 'New Text from FS Node.js', () => {
    console.log('file was written');
});

// directories
if(!fs.existsSync('./assets')){
    fs.mkdir('./assets', (err)=>{
        if(err){
            console.log(err);
        }
        console.log('Folder created');
    });
}else{
    fs.rmdir('./assets', (err)=>{
       if(err){
        console.log(err);
       }
       console.log('folder deleted');
    });
}

// deleting files
if(fs.existsSync('./notes.txt')){
    fs.unlink('./notes.txt', (err)=>{
        if(err){
            console.log(err);
        }
        console.log('File deleted...');
    })
}
