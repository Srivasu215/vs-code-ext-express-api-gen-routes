import path from "path";

import readFile from "../common/readFile.js";

const startFunc = ({ inJsFilePath, inFolderNames }) => {
    const summary = {
        import: {
            added: false,
            line: null,
            missingInRoutesFile: [],
            deletedFoldersButHookExists: [],
        },
    };

    const content = readFile(path.join(inJsFilePath, "routes.js"));

    const matches =
        content.match(/import\s+\{\s*router\s+as\s+([^\s]+)\s*\}\s+from\s+"([^"]+)"/g) || [];

    const routeNames = matches.map((element) => {
        const match = element.match(/\.\/([^\/]+)\/routes\.js/);

        return match?.[1];
    });

    summary.import.missingInRoutesFile = inFolderNames.filter((folder) => {
        return !routeNames.includes(folder);
    });

    summary.import.deletedFoldersButHookExists = routeNames.filter((folder) => {
        return !inFolderNames.includes(folder);
    });

    return summary;
};

export default startFunc;