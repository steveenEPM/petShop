import styled from 'styled-components'
import { memo } from 'react'
import { useNavigate } from 'react-router-dom'

import Loading from '../assets/loading.gif'


export const Items = memo(({ descripcion, precio, src, onClick }) => {
    
    const navigate = useNavigate()

    
    return (
        <Elements className="itemList">
            <img src={src} width={30} height={30} alt={"imagen"}/>
            <div className='contenedor1'>
                <span id='eti1'>{descripcion}</span>
                <span id='eti2'> $ {precio}</span>
            </div>
            <div className='contenedor2'>
                <button className="btn-cart" onClick={onClick}>
                    <i className="fa-sharp fa-solid fa-cart-plus" style={{ color: " #ffffff" }}></i>
                    <span>Comprar</span>
                </button>
            </div>
        </Elements>
    )
})

export const Items2 = memo(({ index }) => {


    return (
        <Elements2 className='itemList' key={index}>
            <img src={Loading} width={150} height={150} />

        </Elements2>
    )
})

const Elements = styled.div`

    height: 228px;
    img{
            align-self: center;
            width: 80px;
            height: 90px;
    }

    .contenedor1{
        display: flex;
        flex-direction: column;
        gap: 5px;
        
        margin-block: 5px;

        #eti1{
            display: flex;
            font-size: 14px;
        }

        #eti2{
            font-size: 19px;
            text-align: right;
            font-weight: 700;
        }

    }

    .contenedor2{
        display: flex;
        flex-direction: row;
        margin-top: 12px;
        flex: 1;
        align-items: center;
        gap:10px;

        a{
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 10px;
            border-radius: 90px;
            border-width: 1px;
            border-color: rgba(0,0,0,.2);
            box-shadow:2px -2px rgba(0,0,0,.05),2px 2px rgba(0,0,0,.05),1px 2px rgba(0,0,0,.05);
            border-style: solid;
            font-size: 22px;
            margin-inline:5px;            
        }

       

    }

`

const Elements2 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 180px;
    height: 250px;
    

`