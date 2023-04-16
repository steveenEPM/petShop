import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

import { Items, Items2 } from '../../components/itemList'
import { Server } from '../../hooks/api1'


export default function TopList({ element }) {


    const navigate = useNavigate()

    return (
        <Elements>
            <div className='container1'>
                <span>
                    Top Ofertas
                </span>
                <button onClick={() => navigate('productos')}>
                    Ver todos
                </button>
            </div>
            <div className='container2'>
                {
                    element ? element.map((key, index) => {

                        const onClick = () => {
                            navigate(`/comprar/${key._id}`)
                        }

                        return (
                            <div key={index}>
                                <Items
                                    src={key.url}
                                    descripcion={key.nombre}
                                    precio={key.precio}
                                    onClick={onClick}
                                />
                            </div>
                        )
                    })
                        : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((key) => <div key={key}><Items2 key={key} /> </div>)

                }
            </div>
        </Elements>
    )

}

const Elements = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-inline: 3%;
    margin-block: 5%;


    .container1{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap:12px;

        span {
            font-weight: bold;
            font-size: 15px;
        }

        button {
            background-color: #c1217b;
            border-style: none;
            border-color: none;
            color: white;
            font-weight: 700;
            font-size: 15px;
            padding: 0.5% 1%;
            cursor: pointer;
            box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.25);
            border-radius: 36px;
            
            :active{
                background-color: white;
                color: #c1217b;
            }
        }
    }

    .container2{
        
        display: grid;
        grid-template-columns: repeat(5,200px);
        gap:55px;
    }

    @media screen  and (max-width: 450px){
        .container2{
            width: 100%;
          
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: 20px;

            .itemList{
                width: 80%;
                margin-inline: 8%;
            }
        }

    }

`