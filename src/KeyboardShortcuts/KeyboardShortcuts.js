


const shortcuts = require("./shortcuts.json").shortcuts;

function KeyboardShortcuts () {
	let shortcutItems = shortcuts.map((shortcut, index) => {
		return (
			<div className="flex m-4" key={index}>
				<div className={"w-28 p-4 pl-8 mr-2 font-bold rounded-l-full text-right " + shortcut.className}>{shortcut.name}</div>
				<div className={"p-4 pr-8 rounded-r-full " + shortcut.className}>{shortcut.description}</div>
			</div>
		);
	});

	return (
		<div className="KeyboardShortcuts px-8 py-24">
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
