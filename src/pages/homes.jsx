import { useParams } from "react-router-dom"
import { useEffect, useState, useMemo } from "react"

import BarraTop from "../container/barrTop"
import Categorias from "../container/home/categorias"
import Search from "../container/search"
import TopList from "../container/home/lista"
import mypApi2 from "../hooks/axios2"
import { listsItems } from "../utils/links"
import Loading from '../container/loading'
import '../styles/home.css'


const Homes = () => {

    const [element, setElement] = useState(undefined)

    useMemo(() => {
        mypApi2(listsItems, null).then(e => {
            setElement(e.data)
            console.log(e)
        })
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            {
                element ? <>
                    <BarraTop index={"marquet"} />
                    <Categorias />
                    <Search />
                    <TopList element={element} />
                </>
                :<Loading/>
            }

        </>
    )

}

export default Homes