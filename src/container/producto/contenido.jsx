import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

import { Items, Items2 } from '../../components/itemList'
import { Container1 } from '../../styles/styled/productos'



export default function Contenido({ lista, indice , maps}) {

    const navigate = useNavigate()


    return (
        <div>
            <Container1>
                {
                    lista ? lista.map((key, index) => {

                        const onClick = () => {
                            navigate(`/comprar/${key._id}`)
                        }

                        let numero = index / 20

                        if (index < 20) {
                            return (
                                <div key={index}>
                                    <Items
                                        descripcion={key.nombre}
                                        precio={key.precio}
                                        src={key.url}
                                        onClick={onClick}

                                    />

                                </div>
                            )
                        }
                    })
                        : [1, 2, 3, 4, 5].map((key) => <Items2 key={key} />)
                }
            </Container1>
            <div>
                {
                    indice > 1 && maps.map((key)=> <span>{key + 1}</span>)
                }
            </div>


        </div>

    )

}




