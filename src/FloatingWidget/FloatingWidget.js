import './FloatingWidget.css'



function FloatingWidget ({hexColor, color}) {
	let style = {
		backgroundColor: hexColor
	};
	return (
		<div className="FloatingWidget bg-white text-slate-800 fixed bottom-4 right-4 border-2 border-slate-400">
			<div className="rgbColor flex text-right p-1">
				<div className="bg-red-300 w-12 px-8 py-2 mr-1">{color.r}</div>
				<div className="bg-green-300 w-12 px-8 py-2 mr-1">{color.g}</div>
				<div className="bg-blue-300 w-12 px-8 py-2">{color.b}</div>
			</div>
			<div className="hexColor px-1 text-center">
				<div className="text-center px-8 py-2 mb-1 font-bold text-xl" style={style}>{hexColor}</div>
			</div>
		</div>
	);
}

export default FloatingWidget;
