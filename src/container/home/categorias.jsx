import styled from "styled-components"
import { useNavigate } from "react-router-dom"

import Item_Categoria from "../../components/categorias"

import Comida from '../../assets/comidaPets.png'
import Cama from '../../assets/camaPets.png'
import Jugetes from '../../assets/jugtePets.png'



export default function Categorias() {

    const navigate = useNavigate()

    const size = 200;

    return (
        <Container>
            <span className="labelCat">
                Compre nuestras categorías principales
            </span>
            <div className="categoria">
                <Item_Categoria
                    uri={Comida} label={"perro"} width={size} height={size}
                    onPress={() => navigate('/productos/perro')}
                />
                <Item_Categoria
                    uri={Cama} label={"gato"} width={size} height={size}
                    onPress={() => navigate('/productos/gato')}
                />
                <Item_Categoria
                    uri={Jugetes} label={"pajaro"} width={size-50} height={size-65}
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
    margin-inline: 3%;
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
        gap:80px;
        border-width:1px ;
    }
`