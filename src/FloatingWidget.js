import './FloatingWidget.css'



function FloatingWidget ({color}) {
	return (
		<div className="FloatingWidget">
			<div className="hexColor">{color}</div>
		</div>
	);
}

export default FloatingWidget;
