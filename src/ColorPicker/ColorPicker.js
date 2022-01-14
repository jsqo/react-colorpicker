import './ColorPicker.css';
import RGBSlider from './RGBSlider';


function ColorPicker ({color, setColor}) {
	return (
		<header className="ColorPickerHeader p-20 border-b-2 border-slate-500 bg-slate-200 min-h-screen">
			<div className="ColorPicker bg-white max-w-md m-auto px-3 py-6">
				<RGBSlider name="Red" bg="bg-red-200" />
				<RGBSlider name="Green" bg="bg-green-200" />
				<RGBSlider name="Blue" bg="bg-blue-200" />
			</div>
		</header>
	);
}

export default ColorPicker;
