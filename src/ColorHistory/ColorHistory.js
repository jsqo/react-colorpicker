


function ColorHistory ({colorHistory}) {
	let colorHistoryItems = colorHistory.map((color, index) => {
		let style = {
			backgroundColor: color
		};
		return (
			<div className="w-40 m-4 inline-block" key={index}>
				<div className="h-28 px-4" style={style}></div>
				<div className="px-4 py-3 text-center bg-white">{color}</div>
			</div>
		);
	});

	return (
		<div className="KeyboardShortcuts px-8 py-24 bg-slate-200">
			<div>
				<h2 className="p-8 text-4xl">Color history:</h2>
			</div>
			<div>
				{colorHistoryItems}
			</div>
		</div>
	);
}

export default ColorHistory;
