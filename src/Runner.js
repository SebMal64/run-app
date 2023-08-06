import './Runner.css';
import img1 from './assets/img/image1.png';
import img2 from './assets/img/image2.png';
import styled from "styled-components";
import Anuncio from './Anuncio';
import React, {useState} from 'react'; 


function Runner() {
    const [estadoModal1, cambiarEstadoModal1] =useState(false);
    return (
        <div className='pont-2'>
            <div className='p-1'>
                <h1 class="h1-edit">run app</h1>
                <div className='grid-main'>
                    <Caja className='time'>
                        <h3 className="h3-edit">Tiempo</h3>
                        <h2 className="tiempo">25:50</h2>
                    </Caja>
                    <Caja className='image1'><img class="img-edit" alt="" src={img1} />
                        <h3 className="h3-edit">Correr</h3>
                    </Caja>
                 
                    <Caja className='image2'><img class="img-edit" alt="" src={img2} />
                        <h3 className="h3-edit">Caminar</h3>
                        </Caja>
                </div>
                <div className='btn-grid'>
                    <Boton className="b1">Continuar</Boton>
                    <Boton onClick={()=>cambiarEstadoModal1(!estadoModal1)} className="b2">Terminar
                    </Boton>
                </div>
            </div>
            <Anuncio
            estado={estadoModal1}
            cambiarEstado={cambiarEstadoModal1}>

            </Anuncio>
            
            
            
            </div>
    )
};
const Caja = styled.div`
color: rgb(28, 28, 28);
border-radius: 27px;
background-color: #D9D9D9;
display: block;
text-align: center;
justify-items: center;
align-items: center;
box-shadow: 3px 3px 15px 5px rgba(114, 114, 114, 0.493);
`;
const Boton = styled.button`
    border-radius: 50px;
    padding: 15px;
    border: none;
    font-size: 1rem;
`;
export default Runner;