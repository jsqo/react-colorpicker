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
			<TagName key={index}>{element.content}</TagName>
		);
	});

	return (
		<div className="Slide" style={style}>
			{contentItems}
		</div>
	);
}

export default Slide;
