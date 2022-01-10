import './Slide.css';



function Slide ({slideContent, color}) {
	const background = slideContent.background ? slideContent.background : color;
	const foreground = slideContent.foreground ? slideContent.foreground : color;
	const style = {
		color: foreground,
		backgroundColor: background
	};

	let contentItems = slideContent.elements.map(function (element, index) {
		const TagName = element.tag;
		return (
			<TagName key={index} className={element.class}>{element.content}</TagName>
		);
	});

	return (
		<div className="Slide p-20 min-h-screen" style={style}>
			{contentItems}
		</div>
	);
}

export default Slide;
