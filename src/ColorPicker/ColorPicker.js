import './ColorPicker.css';
import RGBSlider from './RGBSlider';


function ColorPicker ({
		color, hexColor,
		setRed, setBlue, setGreen
	}) {

	let style = {
		borderColor: hexColor,
		color: hexColor
	};

	return (
		<header className="ColorPickerHeader p-20 border-b-2 border-slate-500 bg-slate-200 min-h-screen">
			<div className="ColorPicker bg-white max-w-md m-auto border-y-4" style={style}>
				<div className="px-3 py-6 border-b-4" style={style}>
					<h2 className="text-xl text-center">RGB seletor</h2>
				</div>
				<div className="px-3 pt-6 pb-12 bg-slate-50">
					<RGBSlider name="Red" bg="bg-red-400" componentValue={color.r} setComponentValue={setRed} />
					<RGBSlider name="Green" bg="bg-green-400" componentValue={color.g} setComponentValue={setGreen} />
					<RGBSlider name="Blue" bg="bg-blue-400" componentValue={color.b} setComponentValue={setBlue} />
				</div>
			</div>
		</header>
	);
}

export default ColorPicker;
