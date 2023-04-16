import { useLocation, useParams } from "react-router-dom"
import {  useMemo ,useState} from "react"

import BarraTop from "../container/barrTop"
import Imagenes from "../container/informacion/imagenes"
import Descripcion from "../container/informacion/descripcion"
import { inforProducto } from "../utils/links"
import mypApi from "../hooks/axios"
import Loading from "../container/loading"
import "../styles/informacion.css"


export default function Informacion() {

    const params = useParams()

    const [element, setElement] = useState(undefined)

    const location = useLocation()

    useMemo(() => {

        const ide = params.ide
        console.log(ide)
        mypApi(inforProducto, { id: ide })
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
                    <div className="Informacion">
                        <Imagenes url={element.url} />
                        <Descripcion element={element} setElement={setElement}/>
                    </div>
                    : <Loading/>
            }
        </>
    )

}