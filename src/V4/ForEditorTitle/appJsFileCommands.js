import * as vscode from 'vscode';

import addSubRouteCommand from './AddSubRoute/start.js';

export function registerAllCommands(context) {
    const command = 'extension.editor.title.routesjs.addSubRoute';

    const CreateEndpoint = vscode.commands.registerCommand(command, addSubRouteCommand(context));

    context.subscriptions.push(CreateEndpoint);
};