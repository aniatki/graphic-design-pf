import { colorPalette } from '../../colorPalette'

export default function ColorPalette() {
    return (
        <>
            {colorPalette.map((color, index) => (
                <div key={index} className="row">
                    <div className="square" style={{ backgroundColor: color.hex }}></div>
                    <span>{color.name}</span>
                    <div>
                        <div className="row"><span>Hex: </span><span>{color.hex}</span></div>
                        <div className="row"><span>RGB: </span><span>{color.rgb}</span></div>
                        <div className="row"><span>CMYK: </span><span>{color.cmyk}</span></div>
                    </div>
                </div>
            ))}
        </>
    );
};