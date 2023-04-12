import styled from "styled-components"
import { useState, useTransition, useEffect } from "react"
import axios from "axios"
import { useNavigate, useParams, useLocation } from "react-router-dom"


import { CheckItems, CheckItems2 } from "../../components/checkItems"
import { Container2 } from "../../styles/styled/productos"
import { contProduct } from "../../utils/links"
import { Server2, Server } from "../../hooks/api1"
import { producto, searchProd } from "../../utils/links"

export default function Filtro({ location, setElements, elements }) {


    const navigate = useNavigate()

    const params = useParams()




    /**Tipos Productos */
    const [alimento, setAlimento] = useState(0)
    const [manta, setManta] = useState(0)
    const [backup, setBackup] = useState(undefined)
    const [asesorio, setAsesorio] = useState(0)




    /**Click en el filtro De animales */
    const onClick = (estado) => {
        navigate(`/productos/${estado}`)
    }


    /**Click en el filtro de Productos */
    const onClick2 = (str) => {

        setElements(undefined)

        if ((location === "/productos/perro") || (location === "/productos/gato") || (location === "/productos/pajaro")) {
            axios.post(producto, { animal: params.id }).then(e => {
                const { data } = e
                let aux = data.filter(index => index.tipo === str)
                setElements(aux)
            }).catch(err => {
                console.log(err);
            })
        }
        else if (location === "/productos") {
            axios.post(producto).then(e => {
                const { data } = e
                let aux = data.filter(index => index.tipo === str)
                setElements(aux)
            }).catch(err => {
                console.log(err);
            })
        }
        else if (location.match("/search")) {
            console.log("Sda")
            axios.post(searchProd,{search:params.id}).then(e => {
                const { data } = e
                let aux = data.filter(index => index.tipo === str)
                setElements(aux)
            }).catch(err => {
                console.log(err);
            })
        }


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


const Axios = (json, callback) => {
    axios.post(contProduct, json)
        .then(e => {
            console.log(e)
            callback(e.data)
        })
        .catch(err => console.log(err))
}

