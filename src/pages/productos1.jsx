import axios from "axios"
import { useEffect, useState ,useMemo} from "react"
import { useLocation, useNavigation, useParams } from "react-router-dom"

import BarraTop from "../container/barrTop"
import '../styles/producto.css'
import { Server1, Server2 } from "../hooks/api1"
import Contenido from "../container/producto/contenido"
import Filtro from "../container/producto/filtro"
import { producto, searchProd } from "../utils/links"
import Search from "../container/search"



export default function Productos() {


    const [elements, setElements] = useState(undefined)

    const [indice, setIndice] = useState(0)

    const [maps, setMaps] = useState(undefined)

    const params = useParams()

    const location = useLocation()

    const navigation = useNavigation()


    useEffect(() => {

        const str = location.pathname

        if ((str === "/productos/perro") || (str === "/productos/gato") || (str === "/productos/pajaro")) {
            setElements(undefined)
            Server2(producto, { animal: params.id }, setElements)
            console.log(params);
            if (params.id === "perro") {
                console.log("perro")

                document.getElementById("gato").classList.remove('filterAdd')
                document.getElementById("pajaro").classList.remove('filterAdd')
                document.getElementById(params.id).classList.add('filterAdd')
            }
            else if (params.id === "gato") {
                console.log("gato")

                document.getElementById("perro").classList.remove('filterAdd')
                document.getElementById("pajaro").classList.remove('filterAdd')
                document.getElementById(params.id).classList.add('filterAdd')
            }
            else if (params.id === "pajaro") {

                console.log("pajaro")
                document.getElementById("gato").classList.remove('filterAdd')
                document.getElementById("perro").classList.remove('filterAdd')
                document.getElementById("pajaro").classList.add('filterAdd')
            }
            return

        } else if (str == "/productos") {
            axios.post(producto).
                then(e => setElements(e.data))
                .catch(err => console.log(err))
        } else if (str.match('/productos/search')) {
            const search = params.id
            setElements(undefined)

            axios.post(searchProd, {search:search})
                .then(e => {
                    setElements(e.data)
                }).catch(err => {
                    console.log(err)
                })

        }
    }, [location])


    return (
        <>
            <BarraTop index={"marquet"} />
            <div className="Contenedor_Pro">
                <Filtro location={location.pathname} setElements={setElements} elements={elements} />
                <div>
                    <Search />
                    <Contenido lista={elements} indice={indice} maps={maps} />
                </div>


            </div>
        </>
    )

}

