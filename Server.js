const fs = require('fs');

fs.writeFile('textfile.txt', "This is line one in textfile.", ()=>{
    console.log('fileCreatedSuccessfully.');
});

fs.appendFile('textfile.txt', "\nThis is line two in textfile.", ()=>{
    console.log('Successfully.');
});

fs.readFile('textfile.txt', 'utf8', (err, data)=>{
    console.log(data);
});

fs.copyFile('textfile.txt', 'textfile.txt', (err)=>{
    if (err) {
        console.error(err);
        return;
    }
    console.log('Copied Successfully');
});

fs.rename('textfile.txt', ('Textfile.txt'), (err)=>{
    console.log('File Renamed Successfully');
});

fs.unlink('textfile.txt', (err)=>{
    console.log('File deleted');
});

// fs.writeFile('textfile.txt', "This is line one in textfile.", ()=>{
//     console.log('fileCreatedSuccessfully.');
// });

fs.readdir('.', (err, files)=>{
    if(err){
        console.error(err);
        return;
    }
    files.forEach(file => {
        console.log(file);
    });
});

fs.mkdir('textfile', (err)=>{
    console.log('New Directory Created');
});

fs.rmdir('textFile', {recursive: true}, (err)=>{
    console.log('Directory Deleted Successfully');
});