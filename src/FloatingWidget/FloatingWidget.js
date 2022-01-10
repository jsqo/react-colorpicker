import './FloatingWidget.css'



function FloatingWidget ({color}) {
	return (
		<div className="FloatingWidget px-6 py-4 bg-white text-slate-800 fixed bottom-4 right-4 border-2 border-slate-400">
			<div className="hexColor">{color}</div>
		</div>
	);
}

export default FloatingWidget;
