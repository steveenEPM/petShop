import { useLocation, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

import BarraTop from "../container/barrTop"
import Imagenes from "../container/informacion/imagenes"
import Descripcion from "../container/informacion/descripcion"
import { inforProducto } from "../utils/links"
import Loading from "../container/loading"
import "../styles/informacion.css"


export default function Informacion() {

    const params = useParams()

    const [element, setElement] = useState(undefined)

    const location = useLocation()

    useEffect(() => {

        const ide = params.ide

        axios.post(inforProducto, { id: ide })
            .then(e => {
                setElement(e.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [location])



    return (
        <>
            <BarraTop index={"marquet"} />
            {
                element ?
                    <div className="Contenedor">
                        <Imagenes url={element.url} />
                        <Descripcion element={element} setElement={setElement}/>
                    </div>
                    : <Loading/>
            }
        </>
    )

}