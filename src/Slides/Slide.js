import './Slide.css';



function Slide ({elements, background, foreground}) {
	const style = {
		color: foreground,
		backgroundColor: background
	};

	let contentItems = elements.map(function (element, index) {
		const TagName = element.tag;
		return (
			<TagName key={index} className={element.class}>{element.content}</TagName>
		);
	});

	return (
		<div className="Slide p-20 min-h-screen" style={style}>
			<div className="max-w-xl">
				{contentItems}
			</div>
		</div>
	);
}

export default Slide;
