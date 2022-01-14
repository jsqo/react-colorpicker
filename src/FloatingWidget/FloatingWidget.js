import './FloatingWidget.css'



function FloatingWidget ({hexColor, color}) {
	let style = {
		backgroundColor: hexColor
	};
	return (
		<div className="FloatingWidget bg-white text-slate-800 fixed bottom-4 right-4 border-2 border-slate-400">
			<div className="rgbColor flex text-right p-1 text-white text-lg">
				<div className="bg-red-400 w-16 px-4 py-2 mr-1 text-center">{color.r}</div>
				<div className="bg-green-400 w-16 px-4 py-2 mr-1 text-center">{color.g}</div>
				<div className="bg-blue-400 w-16 px-4 py-2 text-center">{color.b}</div>
			</div>
			<div className="hexColor px-1 text-center">
				<div className="text-center px-8 py-2 mb-1 font-bold text-xl" style={style}>{hexColor}</div>
			</div>
		</div>
	);
}

export default FloatingWidget;
