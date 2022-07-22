import GLib from 'gi://GLib';
import { dirname, filename } from '../../dist/esm/index.mjs';
import { exit } from 'system';
const byteArray = imports.byteArray;

const getOriginalDirname = (rootDir) => {
    let [res, out, err, status] = GLib.spawn_command_line_sync(`node ${rootDir}/get-original-dirname.js`);
    err = err ? byteArray.toString(err) : err;
    const __dirname = out ? byteArray.toString(out).trim() : undefined;
    if (err) {
        console.error(err);
    }
    return __dirname;
}

const getOriginalFilename = (rootDir) => {
    return getOriginalDirname(rootDir) + '/dirname.test.mjs';
}

/////////// __dirname ///////////

const crossDirname = dirname();
const __dirname = getOriginalDirname(crossDirname);

console.log("GJS");
console.log(`\tdirname() \t-> "${crossDirname}"`);
console.log(`\t__dirname \t-> "${__dirname}"`);

if (crossDirname === __dirname) {
    console.log("✔ dirname() should return the same string as __dirname")
} else {
    console.log("failed");
    exit(1);
}

/////////// __filename ///////////

const crossFilename = filename();
const __filename = getOriginalFilename(crossDirname);

console.log(`\tfilename() \t-> "${crossDirname}"`);
console.log(`\t__filename \t-> "${__filename}"`);

if (crossFilename === __filename) {
    console.log("✔ filename() should return the same string as __filename")
} else {
    console.log("failed");
    exit(1);
}


exit(0);