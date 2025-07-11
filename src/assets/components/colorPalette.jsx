export default function ColorPalette( {colorPalette} ) {
    return (
        <div className="color-grid">
            {colorPalette.map((color, index) => (
                <div key={index} className="row">
                    <div className="square" style={{ backgroundColor: color.hex }}></div>
                    <span>{color.name}</span>
                    <div>
                        <div className="row"><span>Hex: </span><code>{color.hex}</code></div>
                        <div className="row"><span>RGB: </span><code>{color.rgb}</code></div>
                        <div className="row"><span>CMYK: </span><code>{color.cmyk}</code></div>
                    </div>
                </div>
            ))}
        </div>
    );
};