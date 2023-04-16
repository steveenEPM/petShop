import Imagen from '../../assets/medicinaPets.png'
import styled from 'styled-components'

export default function Imagenes({ url }) {

    return (
        <Componet className='imagen'>
            <img src={url} alt={url} />
        </Componet>
    )

}

const Componet = styled.div`

    img{
        width: 400px;
        height: 400px;
    }

    @media screen and ( max-width: 450px) {
        display: flex;
        align-items: center;
        justify-content: center;
        img{
            width: 70%;
            height: 100%;
        }
    }
    

    @media screen and (max-width: 1050px) and (min-width:450px) {

        img{
            width:80%;
            height: 80%;
        }
    }
`