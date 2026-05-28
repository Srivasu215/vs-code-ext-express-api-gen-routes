import fs from "fs";
import path from 'path';

import RoutesJsHelpers from '../RoutesJsHelpers/updateImports/start.js';
import getFolders from '../services/getFolders.js';

export async function runFeatureOrchestration({ context }) {
    const targetPath = context.targetPath;

    const folderNames = getFolders(targetPath);

    const result = RoutesJsHelpers({
        inJsFilePath: targetPath,
        inFolderNames: folderNames
    });

    return result;
};