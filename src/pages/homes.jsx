import { useParams } from "react-router-dom"
import { useEffect } from "react"

import BarraTop from "../container/barrTop"
import Categorias from "../container/home/categorias"
import Search from "../container/search"
import TopList from "../container/home/lista"
import mypApi from "../hooks/axios"

import '../styles/home.css'


const Homes = () => {

    return (
        <>
            <BarraTop index={"marquet"} />
            <Categorias />
            <Search />
            <TopList />
        </>
    )

}

export default Homes