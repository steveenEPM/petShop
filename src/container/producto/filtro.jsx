import styled from "styled-components"
import { useState, useTransition, useEffect } from "react"
import { useNavigate, useParams, useLocation } from "react-router-dom"

import { CheckItems, CheckItems2 } from "../../components/checkItems"
import { Container2 } from "../../styles/styled/productos"
import sweetLoadig from "../../components/alert2"
import { producto, searchProd } from "../../utils/links"
import mypApi2 from "../../hooks/axios2"

export default function Filtro({ location, setElements, elements }) {


    const navigate = useNavigate()

    const params = useParams()

    /**Tipos Productos */
    const [alimento, setAlimento] = useState(0)
    const [manta, setManta] = useState(0)
    const [asesorio, setAsesorio] = useState(0)

    /**Click en el filtro De animales */
    const onClick = (estado) => {
        navigate(`/productos/${estado}`)
    }


    /**Click en el filtro de Productos */
    const onClick2 = (str) => {
        
        mypApi2(producto).then(e => {
            const { data } = e
            
            let aux = data.filter(element => {
                if (element.tipo == str.toLocaleLowerCase()) return element
            });
            setElements(aux)
        }).catch(err => {
            sweetLoadig("Al parecer hubo un error vuelve a recargar o intenete mas tarder")
        })
    }




    return (
        <Container2>
            <div className="animales container">
                <span>
                    Animales
                </span>
                <div>
                    <CheckItems
                        label={"perros"} onClick={() => onClick("perro")} estado={"perro"}
                    />
                    <CheckItems
                        label={"gatos"} onClick={() => onClick("gato")} estado={"gato"}
                    />
                    <CheckItems
                        label={"pajaros"} onClick={() => onClick("pajaro")} estado={"pajaro"}
                    />
                </div>
            </div>

            <div className="procutos container">
                <span>
                    Productos
                </span>
                <div>
                    <CheckItems2 label={"Alimentos"} count={alimento} onClick={() => onClick2("alimentos")} />
                    <CheckItems2 label={"Camas y mantas"} count={manta} onClick={() => onClick2("camas y manta")} />
                    <CheckItems2 label={"Collares"} count={asesorio} onClick={() => onClick2("collares")} />
                </div>
            </div>
        </Container2>
    )

}

