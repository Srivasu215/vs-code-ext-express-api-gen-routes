import * as vscode from 'vscode';

import addSubRouteCommand from './AddSubRoute/start.js';
import fixCommand from './Fix/start.js';

const registerAllCommands = (context) => {
    const command = 'extension.editor.title.routesjs.addSubRoute';

    const CreateEndpoint = vscode.commands.registerCommand(command, addSubRouteCommand(context));

    context.subscriptions.push(CreateEndpoint);

    registerFixCommand(context);
};

const registerFixCommand = (context) => {
    const command = 'extension.editor.title.routesjs.fix';

    const fix = vscode.commands.registerCommand(command, fixCommand(context));

    context.subscriptions.push(fix);
};

export default registerAllCommands;