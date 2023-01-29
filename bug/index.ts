// /path/to/the/script.mjs
import { getDirname, getFilename } from "cross-dirname";

console.log(getDirname()); // outputs "/path/to/the"
console.log(getFilename()); // outputs "/path/to/the/script.mjs"
