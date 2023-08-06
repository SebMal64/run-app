import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const Anuncio = ({ estado, cambiarEstado }) => {
    return (
        <>
            {estado &&
                <Overlay>
                    <Contenedor>
                        <Titulo>¿Desea terminar esta sesión?</Titulo>
                        <BotonCerrar onClick={() => cambiarEstado(false)}>
                            <Link to="/Runner" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"
                                    class="bi bi-x" viewBox="0 0 16 16">
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" fill="#515152"></path> </svg>

                            </Link>
                        </BotonCerrar>
                      <Link to="/Control" >  <Boton>
                            Guardar, y ver datos
                            
                        </Boton></Link> 
                    </Contenedor>
                </Overlay>
            }
        </>
    );
}
const Overlay = styled.div`
display: flex;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0,.3);
    align-items: center;
    justify-content: center;
`;
const Titulo = styled.div`
font-size: 1rem;
color: black;`
const Contenedor = styled.div`

background-color: whitesmoke;
color: rgb(28, 28, 28);
border-radius: 27px;
box-shadow: 3px 3px 15px 5px rgba(114, 114, 114, 0.493);
width: 400px;
min-height: 100px;
padding: 70px 50px;
position: relative;

`;
const Boton = styled.div`
font-size: 1rem;

margin-top: 30px;
padding: 15px ;
border-radius: 40px;
background-color: rgba(214, 214, 214);
text-decoration: none;
color: black;`;


const BotonCerrar = styled.div`
display: block;
position: absolute;
top: 10px;
right: 10px;
color: rgb(81, 81, 82);
`;

export default Anuncio

