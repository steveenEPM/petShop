import styled from "styled-components"
import { useNavigate } from "react-router-dom"

import Item_Categoria from "../../components/categorias"

import Comida from '../../assets/comidaPets.png'
import Cama from '../../assets/camaPets.png'
import Jugetes from '../../assets/jugtePets.png'



export default function Categorias() {

    const navigate = useNavigate()

    const size = 150;

    return (
        <Container>
            <span className="labelCat">
                Encuentra y conciente a tus mascotas
            </span>
            <div className="categoria">
                <Item_Categoria
                    icons={"fa-solid fa-dog "} label={"perro"}
                    onPress={() => navigate('/productos/perro')}
                />
                <Item_Categoria
                    icons={"fa-solid fa-cat "} label={"gato"}
                    onPress={() => navigate('/productos/gato')}
                />
                <Item_Categoria
                    icons={"fa-solid fa-dove"} label={"pajaro"}
                    onPress={() => navigate('/productos/pajaro')}
                />
            </div>
        </Container>
    )
}

const Container = styled.div`
    display :flex ;
    flex-direction: column;
    margin-top: 2%;
    gap:20px;


    .labelCat{
        align-self: center;
        color: #c1217b;
        font-size: 17px;
        font-weight: bold;
    }
  
    .categoria {
        border-width: 1px;
        justify-content: center;
        display: flex;
        flex-direction: row;
        border-width:1px ;
        gap:50px;
    }

    @media screen  and (max-width: 450px){
       overflow: hidden;
       
       .labelCat { 
           justify-content: center;
            font-size:14px ;
        }

        .categoria{
            gap:10px;
        }

        .itemCategorys{
            width: 80px;
            height: 70px;

            .fa-solid  {
                font-size: 25px;
            }

            span { font-size:12px}
        }
    }
`