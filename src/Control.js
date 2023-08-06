import { Link } from 'react-router-dom';
import './Control.css';
import styled from "styled-components";

function Control() {
    return (
        <div className='pont-2'>
            <h2 className='tit'>Reporte</h2>
            <div className='grid-m'>
                <div className='grid-estad'>
                    <Bloque>
                        <Propiedad>Velocidad promedio</Propiedad><br />
                        <Valor>400 km/h</Valor>
                    </Bloque>

                    <Bloque>
                        <Propiedad>Calorías</Propiedad><br />
                        <Valor>70kcla</Valor>
                    </Bloque>

                    <Bloque>
                        <Propiedad>Distancia</Propiedad><br />
                        <Valor>478 m</Valor>
                    </Bloque>
                    <Bloque>
                        <Propiedad>Tiempo</Propiedad><br />
                        <Valor>35:90</Valor>
                    </Bloque>

                </div>
                <div className='grid-info'>

                    <Bloque className='estado'>
                        <h4 className="titulo-es">Estadísticas</h4><br />
                        <h4 className="tit-h5">Tiempo corriendo</h4>
                        <div id="barra1" className="barra"></div>
                        <h4 className="tit-h5">Tiempo caminando</h4>
                        <div id="barra2" className="barra"></div></Bloque>


                    <Botones>
                        <Boton>Guardar registro</Boton>
                        <Boton>Borrar registro</Boton>
                        <Link to="/Registro"><Boton>Ver registro completo</Boton></Link>
                        <Link to="/Runner"><Boton>Empezar de nuevo</Boton></Link>
                    </Botones>
                </div>
            </div>
        </div>
    )
}
export default Control;

const Bloque = styled.div`
    background: linear-gradient(rgb(231, 231, 231), rgb(218, 218, 218));
    box-shadow: var(--shadow);
    padding: 30px;
    border-radius: 20px;
        justify-items: center;
    align-items: center;
    text-align: center;
`;
const Boton = styled.button`
    border-radius: 50px;
    padding: 15px;
    border: none;
    font-size: 1rem;
    background-color: blue`;

const Propiedad = styled.h4`
margin-top: 10%;
color: rgb(51, 51, 51);
text-transform: capitalize;
`;
const Valor = styled.h3`
font-size: 3rem;    
color: rgb(47, 47, 47);
text-transform: lowercase;
`;
const Botones = styled.div`
display: grid;
margin-top: 30px;
gap: 20px;
grid-template-columns: 100%, 100%;`;