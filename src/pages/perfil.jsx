import { useCookies } from "react-cookie"
import { useState, useMemo } from "react"
import { useNavigate } from "react-router-dom"

import BarraTop from "../container/barrTop"
import ImagenFondo from "../container/MyPerfl/imgFondo"
import Container from "../container/MyPerfl/container"
import Perfil from "../container/MyPerfl/perfil"
import Loading from '../container/loading'
import myApi from '../hooks/axios'


export default function MyPerfil() {
    const [cookies, setCookie] = useCookies(['@element']);
    const [user, setUser] = useState(undefined)
    const navigate = useNavigate()

    useMemo(() => {

        if(!cookies["@element"]) return navigate('/')

        myApi('/usuario/getPerfil', undefined, cookies["@element"])
            .then(e => {
                setUser(e.data)
                console.log(e.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            {
                user ? <>
                    <BarraTop />
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <ImagenFondo />
                        <Perfil usuario={user.usuario} fecha={user.fecha} email={user.correo} mobile={"+593 098 212 12 96"} />
                    </div>
                </>
                    : <Loading />
            }


        </>
    )

}