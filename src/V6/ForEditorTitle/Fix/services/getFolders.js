import fs from "fs";
import path from 'path';

const getFolders = (dirPath) => {
    return fs.readdirSync(dirPath).filter((file) => {
        return fs.statSync(path.join(dirPath, file)).isDirectory();
    });
};

export default getFolders;