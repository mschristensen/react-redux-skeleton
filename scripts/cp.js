const fs = require('fs');
const path = require('path');
const colors = require('colors');

const args = process.argv.slice(2);
if(args.length < 2) return console.error('Must supply a source and destination path'.red);

try {
    let dest = args[1];

    if(fs.existsSync(dest)) {
        // if destination path is a directory, keep the original filename
        if(fs.lstatSync(dest).isDirectory()) {
            dest = path.join(dest, path.basename(args[0]));
        }
        // warn if the destination path is a path to an existing file
        if(fs.existsSync(dest)) {
            console.warn(('WARNING: Overwriting \'' + dest + '\'').yellow);
        }
    } else {
        throw new Error('Destination path does not exist');
    }

    fs.createReadStream(args[0]).pipe(fs.createWriteStream(dest));
    console.log('Done'.green);
} catch(err) {
    console.error('[ERROR]: '.red + 'cp'.yellow + ' Unable to copy files:\n', err);
}
