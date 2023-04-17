import { useCookies } from "react-cookie"
import { useState, useMemo,useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"

import BarraTop from "../container/barrTop"
import ImagenFondo from "../container/MyPerfl/imgFondo"
import Container from "../container/MyPerfl/container"
import Perfil from "../container/MyPerfl/perfil"
import Loading from '../container/loading'
import myApi from '../hooks/axios'


export default function MyPerfil() {
    const [cookies, setCookie] = useCookies(['@element']);
    const [user, setUser] = useState("undefined")
    const navigate = useNavigate()
    const location = useLocation()
    useEffect(() => {

        if(!cookies["@element"]) return navigate('/')
        console.log("d")
    }, [location])

    return (
        <>
            {
                user ? <>
                    <BarraTop />
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <ImagenFondo />
                        <Perfil usuario={"Steveen"} fecha={"20/02/2022"} email={"steveen.pm@gmail.com"} mobile={"+593 098 212 12 96"} />
                    </div>
                </>
                    : <Loading />
            }


        </>
    )

}