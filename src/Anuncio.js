import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const Anuncio = () => {
    return (
        <>
        <Overlay>
            <Contenedor>
            <button><h1>Haber hijoles</h1></button>
            <Link to="/Control" >
                <button className="btn-main">Registrarme</button>
                </Link>
                </Contenedor>
            </Overlay>
        </>
    );
}
const Overlay =styled.div`
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
const Contenedor = styled.div`

background-color: gray;
color: rgb(28, 28, 28);
border-radius: 27px;
box-shadow: 3px 3px 15px 5px rgba(114, 114, 114, 0.493);
width: 500px;
min-height: 100px;
padding: 50px;
position: relative;

`;


export default Anuncio;

