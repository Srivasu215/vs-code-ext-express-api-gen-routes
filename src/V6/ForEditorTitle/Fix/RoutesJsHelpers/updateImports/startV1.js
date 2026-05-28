import path from 'path';

import readFile from "../common/readFile.js";

const startFunc = ({ inJsFilePath, inFolderNames }) => {
    const summary = {
        import: { added: false, line: null },
    };

    const content = readFile(path.join(inJsFilePath, "routes.js"));
    const matches1 = content.match(/import\s+\{\s*router/g);
    const matches = content.match(/import\s+\{\s*router\s+as\s+([^\s]+)\s*\}\s+from\s+"([^"]+)"/g);

    const routeNames = matches.map((element) => {
        const match = element.match(/\.\/([^\/]+)\/routes\.js/);

        return match?.[1];
    });

    const missingInRoutesFile = inFolderNames.filter((folder) => {
        return !routeNames.includes(folder);
    });

    const deletedFoldersButHookExists = routeNames.filter((folder) => {
        return !inFolderNames.includes(folder);
    });


    console.log(matches);
    console.log(matches);

    return summary;
};

export default startFunc;