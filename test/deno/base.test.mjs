import { dirname as pathDirname } from "https://deno.land/std/path/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { dirname, filename } from '../../mod.ts';

export const esmFilename = () => {
    const __filename = new URL('', import.meta.url).pathname;
    return __filename;
};

export const esmDirname = () => {
    return pathDirname(esmFilename());
};

Deno.test("Deno dirname", () => {
    const crossDirname = dirname();
    const _esmDirname = esmDirname();
    
    console.log("Deno");
    console.log(`\tdirname() \t-> "${crossDirname}"`);
    console.log(`\tesmDirname() \t-> "${_esmDirname}"`);
    assertEquals(crossDirname, _esmDirname);
});

Deno.test("Deno filename", () => {
    const crossFilename = filename();
    const _esmFilename = esmFilename();
    
    console.log("Deno");
    console.log(`\tfilename() \t-> "${crossFilename}"`);
    console.log(`\tesmFilename() \t-> "${_esmFilename}"`);
    assertEquals(crossFilename, _esmFilename);
});