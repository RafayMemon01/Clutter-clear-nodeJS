import fs from 'fs/promises';
import fsn from 'fs';
import path from 'path';
import { fileURLToPath } from 'url'; // URL module to handle URL to path conversion

// Get the current module's file path
const __filename = fileURLToPath(import.meta.url);
// Get the current directory path
const basePath = path.dirname(__filename); 

// const basePath = "C:\\Users\\rafay\\OneDrive\\Documents\\Backend\\Clutter Clearer Tool"


let files = await fs.readdir(basePath);

for (const item of files) {
    console.log(item)

    let ext = item.split(".")[item.split(".").length - 1]

    console.log(ext)

    if(ext != "js" && ext != "json" && item.split(".").length>1){
        if(fsn.existsSync(path.join(basePath, ext))){
            fs.rename(path.join(basePath, item), path.join(basePath, ext, item))
        }
        else{
            fs.mkdir(ext)
            fs.rename(path.join(basePath, item), path.join(basePath, ext, item))
        }
    }
    
}

console.log(files)