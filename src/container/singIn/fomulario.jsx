import styled from "styled-components"
import { useState, useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom";
import { useCookies } from 'react-cookie'

import mypApi2 from "../../hooks/axios2";
import Inputs from "../../components/inputsForms";
import RadioButtons from "../../components/radioButtons";
import sweetLoadig from "../../components/alert2";


export default function Formulario({ loading, setLoading }) {

    const [user, setUser] = useState({ usuario: '', correo: '', password: '', repPassword: '', sexo: 'hombre', fecha: "" })


    const [cookies, setCookie] = useCookies([])


    const [errUser, setErrUser] = useState(false)

    const [errPass, setErrPass] = useState(false)

    const navigate = useNavigate()

    const location = useLocation()


    const onSubmit = e => {
        e.preventDefault()
        const { usuario, correo, password, repPassword, sexo, fecha } = user
        if (password !== repPassword) return setErrPass(true)

        setLoading(true)

        mypApi2('/usuario/register', {
            usuario, correo, password, sexo, fecha
        }).then(e => {
            setLoading(false)
            localStorage.setItem("keys", e.data.usuario)
            setCookie('@element', e.data.token, { path: '/' })
            navigate('/')
        }).catch(err => {
            setLoading(false)
            sweetLoadig(err.response.data)
            console.log(err)
        })


    }

    const onChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const onChange2 = (target, value) => setUser({ ...user, [target]: value })

    return (
        <form className="form" onSubmit={onSubmit}>
            <h1>
                Registrate
            </h1>
            <Inputs label={"usuario"} type={"text"} max={15} placeholder={"example123"} autoComplete={"true"}
                name={"usuario"} onChange={onChange} error={errUser} />
            <Inputs label={"correo"} type={"email"} max={25} placeholder={"example123@mail.com"} autoComplete={"true"}
                name={"correo"} onChange={onChange} error={errUser} />

            <div>
                <div className="contrasenas" >
                    <Inputs label={"Contraseña"} type={"password"} max={15} placeholder={"******"}
                        name={"password"} onChange={onChange} error={errPass} />
                    <Inputs label={"Repetir Contraseña"} type={"password"} max={15} placeholder={"******"}
                        name={"repPassword"} onChange={onChange} error={errPass} />
                </div>
                {
                    errPass && <span style={{ color: "rgba(255,0,0,1)", fontWeight: "bold" }}>Contraseñas no coinciden</span>
                }
            </div>

            <div className="radios" >
                <span >Sexo</span>
                <div >
                    <RadioButtons classI={"fa-solid fa-mars"} names={"hombre"} color={"#0000ff"} sexo={user.sexo} onClick={onChange2}
                        colorS={"#92FFFB"}
                    />
                    <RadioButtons classI={"fa-solid fa-venus"} names={"mujer"} color={"#ff0ade"} sexo={user.sexo} onClick={onChange2}
                        colorS={"#FFDBEA"}
                    />
                </div>
            </div>

            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: "12px" }}>
                <span style={{ color: "rgba(0,0,0,.7)", fontSize: 17 }}>
                    Fecha nacimineto
                </span>
                <input type="date" style={{ padding: "1.5% 2%", borderRadius: 12, borderStyle: "none", border: "1px solid rgba(0,0,0,.5)" }}
                    name="fecha" onChange={onChange} required />
            </div>
            <button type="submit" className="btnFormL">
                <span>confirmar</span>
            </button>

        </form>
    )

}

