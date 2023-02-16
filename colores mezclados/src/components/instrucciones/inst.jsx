import React from 'react'
import './inst.css'

function Instrucciones() {
  return (
    <div className='container'>
        <h1 className='titulo'>INSTRUCCIONES :</h1>
        <div className='listas'>
            <ol>
                <li><h2>Hacer click en dos cuadrados de colores.</h2></li>
                <li><h2>Luego, hacer click en el boton "MEZCLAR COLORES" para hacer la mezcla y recibir el código del color mezclado en Hexadecimal.</h2></li>
                <li><h2>Si desea hacer una mezcla nuevamente pero con otros dos colores, presione en el boton "LIMPIAR".</h2></li>
            </ol>
        </div>
    </div>
  )
}

export default Instrucciones