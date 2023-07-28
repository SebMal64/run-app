import './Control.css';

function Control() {
    return (
        <div className='pont-2'>
            <h2 className='tit'>Reporte</h2>
            <div className='grid-m'>
                <div className='grid-estad'>
                    <div className='block b-1'>
                        <h4 className="titulo">Velocidad promedio</h4><br/>
                        <h3 className="dat" id="data-1">400 km/h</h3>
                    </div>
                    <div className='block b-2'>
                    <h4 className="titulo">Calorías</h4><br/>
                        <h3 className="dat" id="data-1">70 kcal</h3>
                    </div>
                    <div className='block b-3'>
                        <h4 className="titulo">Distancia</h4><br/>
                        <h3 className="dat" id="data-1">478 m</h3>
                        </div>
                    <div className='block b-4'>
                        <h4 className="titulo">Tiempo</h4><br/>
                        <h3 className="dat" id="data-1">34:45</h3></div>
                </div>
                <div className='grid-info'>
                    <div className='estado'>
                    <h4 className="titulo-es">Estadísticas</h4><br/>
                    <h4 className="tit-h5">Tiempo corriendo</h4>
                    <div id="barra1" className="barra"></div>
                    <h4 className="tit-h5">Tiempo caminando</h4>
                    <div id="barra2" className="barra"></div>


                    </div>
                    <div className='grid-bt'>
                        <button className="btn-run a">Guardar registro</button>
                        <button className="btn-run b">Ver registro completo</button>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Control;