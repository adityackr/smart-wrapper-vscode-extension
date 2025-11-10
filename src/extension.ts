import * as vscode from 'vscode';
export function activate(context: vscode.ExtensionContext) {
	const disposable = vscode.commands.registerCommand(
		'smartWrapper.wrap',
		async () => {
			const editor = vscode.window.activeTextEditor;
			if (!editor) {
				return;
			}

			const tag = await pickTag();
			if (!tag) {
				return;
			}

			const { document, selections } = editor;

			await editor.edit((editBuilder) => {
				selections.forEach((selection) => {
					const selectedText = document.getText(selection);

					const indent = detectIndent(document, selection);
					const wrapped = wrapContent(selectedText, tag, indent);

					editBuilder.replace(selection, wrapped);
				});
			});
		}
	);

	context.subscriptions.push(disposable);
}

export function deactivate() {}

// --- Tag Picker ------------------------------------------------------
async function pickTag(): Promise<string | undefined> {
	const items = [
		'div',
		'span',
		'section',
		'article',
		'header',
		'footer',
		'main',
		'nav',
		'custom',
	];

	const choice = await vscode.window.showQuickPick(items, {
		placeHolder: 'Select wrapper tag',
	});

	if (choice === 'custom') {
		return vscode.window.showInputBox({
			placeHolder: 'Enter custom tag name (e.g., my-wrapper)',
		});
	}

	return choice ?? undefined;
}

// --- Indent Detection ------------------------------------------------
function detectIndent(
	document: vscode.TextDocument,
	selection: vscode.Selection
): string {
	const line = document.lineAt(selection.start.line);
	const indentMatch = line.text.match(/^\s+/);
	return indentMatch ? indentMatch[0] : '';
}

// --- Wrapping Logic --------------------------------------------------
function wrapContent(content: string, tag: string, baseIndent: string): string {
	const isSingleLine = !content.includes('\n');

	// detect self-closing JSX/HTML
	const isSelfClosing = /^<[^>]+\/>$/.test(content.trim());

	if (isSingleLine && !isSelfClosing) {
		return `<${tag}>${content}</${tag}>`;
	}

	// Multi-line formatting
	const innerIndent = baseIndent + ' ';
	const lines = content.split('\n');
	const indented = lines
		.map((line) => (line.trim() ? innerIndent + line.trim() : line))
		.join('\n');

	return `<${tag}>\n${indented}\n${baseIndent}</${tag}>`;
}
