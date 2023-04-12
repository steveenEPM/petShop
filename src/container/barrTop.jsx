import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'

import '../styles/efectsButton.css'
import logo from '../assets/petShop.png'
import shopping from '../assets/shopping.png'
import perfil from '../assets/perfilGato.png'



export default function BarraTop({ index }) {


    const navigate = useNavigate()

    const location = useLocation()

    const [cookies, setCookie,removeCookie] = useCookies(['@element']);


    useEffect(() => {
        if (index == 'marquet') {
            pathSele('.btn1')
        }
    }, [])

    const pathSele = (str) => {
        document.querySelector(str).style.color = '#C1217B'
    }

    /**Envents onClick */
    const iniciar = () => {
        navigate('/loing')
    }

    const salir = ()=>{
        removeCookie('@element',{path:"/"})
        localStorage.removeItem('keys')
        navigate('/loing')
    }

    return (
        <Container >
            <div className='col1'>
                <img src={logo} width={45} height={45} alt='icono' />
                <label>pet shop</label>
            </div>
            <div className='col2'>
                <button className='btn btn1' onClick={() => navigate('/')}>marquet</button>
                <button className='btn btn3'>quien soy</button>
            </div>
            <div className='col3'>
                {
                    cookies['@element'] ?
                        <>
                            <button onClick={() => navigate(`/perfil/${localStorage.getItem('keys')}`)}>
                                {localStorage.getItem("keys")}
                                <img src={perfil} width={25} height={25} alt='perfil' />
                            </button>
                            <div style={{ height: 40, border: "1px solid rgba(0,0,0,.1)",borderRadius:190 }} />
                            <button onClick={salir}>
                                <i className="fa-sharp fa-solid fa-circle-xmark" style={{ color: "#7f1e53" }} />
                            </button>
                        </>

                        :
                        <button onClick={iniciar}>
                            Iniciar seccion
                            <img src={perfil} width={25} height={25} alt='perfil' />

                        </button>

                }

            </div>
        </Container>
    )

}


const Container = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    padding-inline: 32px;
    z-index: 1;
    
    background-color: rgba(193, 33, 123,.1);
    div{
        display:flex;
        flex-direction:row ;
       
    }

    
    button{
        
        background-color: inherit;
        font-size: 19px;
        color: black;
        font-family: 'DM Serif Display', serif;
        font-weight: bold;
        text-transform: capitalize;
        gap:10px;
        padding-inline: 13px;
        padding-block:15px;
        align-items: center;
        border-style: none;
        flex-direction: row-revers;
        gap: 20px;
    }
    .col1 {
        gap: 20px;
        align-items: center;
        label {
            font-family: 'Fredoka One', cursive;
            font-weight: 700;
            font-size: 32px;
            text-transform: capitalize;
            color: #C1217B;
        }
    }

    .col3 {
       display: inline-flex;
       align-items: center;
        button{
            color: #C1217B;
        }
        
    }
`