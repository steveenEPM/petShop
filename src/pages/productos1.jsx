import { useEffect, useState, useMemo } from "react"
import { useLocation, useNavigation, useParams } from "react-router-dom"

import BarraTop from "../container/barrTop"
import Contenido from "../container/producto/contenido"
import Filtro from "../container/producto/filtro"
import { producto, searchProd } from "../utils/links"
import Search from "../container/search"
import '../styles/producto.css'
import sweetLoadig from "../components/alert2"
import myApi2 from '../hooks/axios2'
import Loading from '../container/loading'

export default function Productos() {


    const [elements, setElements] = useState(undefined)

    const [indice, setIndice] = useState(0)

    const [maps, setMaps] = useState(undefined)

    const params = useParams()

    const location = useLocation()

    const navigation = useNavigation()


    useMemo(() => {

        const str = location.pathname
        console.log(str)
        if (str === "/productos") {
            myApi2(producto).then((e) => {
                setElements(e.data)
            })
                .catch(err => {
                    sweetLoadig("Al parecer hubo un error vuelve a recargar o intenete mas tarder")
                })
            return
        }
        else if (str.match('/productos/search')) {
            myApi2(searchProd, { search: params.id }).then(e => {
                setElements(e.data)
            }).catch(err => {
                sweetLoadig("Al parecer hubo un error vuelve a recargar o intenete mas tarder")

            })
            return
        } else {
            myApi2(producto, { animal: params.id }).then(e => {
                setElements(e.data)
            }).catch(err => {
                sweetLoadig("Al parecer hubo un error vuelve a recargar o intenete mas tarder")
            })
            return
        }
    }, [location])

    return (
        <>
            {
                elements ? <>
                    <BarraTop index={"marquet"} />
                    <div className="Contenedor_Pro">
                        <Filtro location={location.pathname} setElements={setElements} elements={elements} />
                       <div style={{width:"100%"}}>
                            <Search />
                            <Contenido lista={elements}/>
                        </div>
                    </div>
                </>
                    : <Loading />
            }
        </>
    )

}

