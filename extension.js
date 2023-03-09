
const { scheduler } = require('timers/promises');
const vscode = require('vscode');
/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	console.log('The PenguinLang extension has been activated.');
	vscode.window.setStatusBarMessage("🐧✅The PenguinLang extension has been activated.",3)
	let disposable = vscode.commands.registerCommand('penguinlang.check', function () {
		vscode.window.showInformationMessage('🐧💬The PenguinLang extension works.')
	});
	context.subscriptions.push(disposable);
	let disposable2 = vscode.commands.registerCommand('penguinlang.create',function () {
		vscode.window.showInformationMessage('😅Sorry, but the programming language is still under development.')
	})
	context.subscriptions.push(disposable2);
}
function deactivate() {
	vscode.window.setStatusBarMessage("🐧⚠The PenguinLang extension has been deactivated.",3)
	vscode.window.showInformationMessage('🐧💬The PenguinLang extension has been deactivated.');
}

module.exports = {
	activate,
	deactivate
}
