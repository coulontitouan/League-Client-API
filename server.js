var os = require('os');
const fs = require('fs');
var exec = require('child_process').exec;
if(os.platform() === 'win32') {

} else if(os.platform() === 'darwin') {
    fs.copyFile("/Applications/League of Legends.app/Contents/LoL/lockfile", "./lockfile.txt", (err) => {
        if (err) {
            console.log(err);
        }
    });
    exec(`http-server -o lockfile.txt`);
}

fs.readFile('lockfile.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});