


const shortcuts = require("./shortcuts.json").shortcuts;

function KeyboardShortcuts () {
	let shortcutItems = shortcuts.map((shortcut) => {
		return (
			<div className="flex max-w-xl m-4">
				<div className={"p-4 pl-8 mr-2 font-bold rounded-l-full " + shortcut.className}>{shortcut.name}</div>
				<div className={"p-4 pr-8 rounded-r-full " + shortcut.className}>{shortcut.description}</div>
			</div>
		);
	});

	return (
		<div className="KeyboardShortcuts px-8 py-24 bg-slate-200">
			<div>
				<h2 className="p-8 text-4xl">Keyboard shortcuts:</h2>
			</div>
			<div>
				{shortcutItems}
			</div>
		</div>
	);
}

export default KeyboardShortcuts;
