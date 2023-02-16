import React, { useState,  useEffect } from 'react';
import './paleta.css'

function Paleta() {
  const [color1, setColor1] = useState(null);
  const [color2, setColor2] = useState(null);
  const [mezcla, setMezcla] = useState(null);
  const [colorResultado, setColorResultado] = useState(null);
  const [ambosColoresSeleccionados, setAmbosColoresSeleccionados] = useState(0);
  
  const handleColorClick = (color) => {
    if (ambosColoresSeleccionados === 0) {
      setColor1(color);
      setAmbosColoresSeleccionados(1);
    } else if (ambosColoresSeleccionados === 1) {
      setColor2(color);
      setAmbosColoresSeleccionados(2);
    }
  };
  

  const handleMezclarClick = () => {
    if (ambosColoresSeleccionados === 2) {
      const resultado = mezclarColores(color1, color2);
      setMezcla(resultado);
      setColorResultado(resultado);
    }
  };
  

  useEffect(() => {
    if (mezcla) {
      setColorResultado(mezcla);
    }
  }, [mezcla, colorResultado]);
  

  const mezclarColores = (color1, color2) => {
    // Convertir los colores a formato RGB
    const rgb1 = hexToRgb(color1);
    const rgb2 = hexToRgb(color2);

    // Mezclar los canales RGB de los colores
    const r = Math.round((rgb1.r + rgb2.r) / 2);
    const g = Math.round((rgb1.g + rgb2.g) / 2);
    const b = Math.round((rgb1.b + rgb2.b) / 2);

    // Convertir el resultado a formato hexadecimal
    return rgbToHex(r, g, b);
  };

  const hexToRgb = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return { r, g, b };
  };

  const rgbToHex = (r, g, b) => {
    const hexR = r.toString(16).padStart(2, '0');
    const hexG = g.toString(16).padStart(2, '0');
    const hexB = b.toString(16).padStart(2, '0');
    return `#${hexR}${hexG}${hexB}`;
  };

  const handleBorrarClick = () => {
    setColor1(null);
    setColor2(null);
    setMezcla(null);
    setColorResultado(null);
    setAmbosColoresSeleccionados(0);
  };

  return (
    <>
    <div className="paleta">
    <button
          className="color-box"
          style={{ backgroundColor: '#F94144' }}
          onClick={() => handleColorClick('#F94144')}
        ></button>
        <button
          className="color-box"
          style={{ backgroundColor: '#F3722C' }}
          onClick={() => handleColorClick('#F3722C')}
        ></button>
        <button
          className="color-box"
          style={{ backgroundColor: '#F8961E' }}
          onClick={() => handleColorClick('#F8961E')}
        ></button>
        <button
          className="color-box"
          style={{ backgroundColor: '#F9C74F' }}
          onClick={() => handleColorClick('#F9C74F')}
        ></button>
        <button
          className="color-box"
          style={{ backgroundColor: '#90BE6D' }}
          onClick={() => handleColorClick('#90BE6D')}
        ></button>
        <button
          className="color-box"
          style={{ backgroundColor: '#43AA8B' }}
          onClick={() => handleColorClick('#43AA8B')}
        ></button>
        <button
          className="color-box"
          style={{ backgroundColor: '#577590' }}
          onClick={() => handleColorClick('#577590')}
        ></button>
        <button
          className="color-box"
          style={{ backgroundColor: '#4D4D4D' }}
          onClick={() => handleColorClick('#4D4D4D')}
        ></button>
      </div>

      <div className="paleta">
        <button
          className="color-box"
          style={{ backgroundColor: '#B993D6' }}
          onClick={() => handleColorClick('#B993D6')}
        ></button>
        <button
          className="color-box"
          style={{ backgroundColor: '#8CA6DB' }}
          onClick={() => handleColorClick('#8CA6DB')}
        ></button>
        <button
          className="color-box"
          style={{ backgroundColor: '#6CB2EB' }}
          onClick={() => handleColorClick('#6CB2EB')}
        ></button>
        <button
          className="color-box"
          style={{ backgroundColor: '#74C2C2' }}
          onClick={() => handleColorClick('#74C2C2')}
        ></button>
        <button
          className="color-box"
          style={{ backgroundColor: '#006744' }}
          onClick={() => handleColorClick('#006744')}
        ></button>
        <button
          className="color-box"
          style={{ backgroundColor: '#F0E4D7' }}
          onClick={() => handleColorClick('#F0E4D7')}
        ></button>
        <button
          className="color-box"
          style={{ backgroundColor: '#F8D7DA' }}
          onClick={() => handleColorClick('#F8D7DA')}
        ></button>
        <button
          className="color-box"
          style={{ backgroundColor: '#E1F7D5' }}
          onClick={() => handleColorClick('#E1F7D5')}
        ></button>
      </div>
  <div className='mezcla'> 
  <button className="btn" onClick={()=>handleMezclarClick()} disabled={ambosColoresSeleccionados < 2}> Mezclar Colores </button>

  </div> 
  {colorResultado && (
  <div className="color-box" style={{ backgroundColor: colorResultado }}>
    <div className='numero'>
    {colorResultado}
    </div>
    
    </div>
)}    
<div className='limpiar'>
    <button className='btn2' onClick={()=>handleBorrarClick()}>Limpiar</button>
</div>
  </>
  );
}

export default Paleta;
