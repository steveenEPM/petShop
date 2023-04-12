import styled from "styled-components"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie'
import mypApi2 from "../../hooks/axios2"
import sweetLoadig from "../../components/alert2";

export default function Formulario({ loading, setLoading }) {

    const [user, setUser] = useState({ correo: '', password: '' })


    const [cookies, setCookie] = useCookies([])

    const navigate = useNavigate()


    const onSubmit = e => {
        e.preventDefault()

        const { correo, password } = user

        setLoading(true)
        mypApi2('/usuario/logIn', { correo, password }).then(e => {
            console.log(e.data)

            setCookie('@element', e.data.token, { path: '/' })
            localStorage.setItem("keys", e.data.usuario)
            navigate('/')

        })
            .finally(() => setLoading(false))
            .catch(err => {
                setLoading(false)
                sweetLoadig(err.response.data)
            })
    }


    const onChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    return (
        <form className="form" onSubmit={onSubmit}>
            <span>
                pet Shop
            </span>
            <h1>
                Iniciar seccion
            </h1>
            <Inpust className="inputGroup">
                <label>correo</label>
                <input type="text" max={150} min={1} name="correo" aria-label="label-email" placeholder="example@mail.com" required
                    autoComplete="true" onChange={onChange} />
            </Inpust>
            <Inpust>
                <label>contraseña</label>
                <input type="password" max={150} min={1} name="password" aria-label="label-pass" placeholder="contraseña" required
                    onChange={onChange}
                />
            </Inpust>
            <button type="submit" className="btnFormL">
                <span>confirmar</span>
            </button>
            <a onClick={() => navigate('/singIng')}>
                deseas registrarte
            </a>
        </form>
    )

}

const Inpust = styled.div`

    display: flex;
    flex-direction: column;
    gap:1px;
    margin-block: 3px;
    input{
        padding: 12px 15px;
        border-radius: 17px;
        border: 2px solid rgba(0,0,0,.4);
        outline:none;


        :focus {
            border: 2px solid rgba(193, 33, 123,0.5);
        }
    }

    label{
        font-weight: 500;
        text-transform: capitalize;
        color: rgba(0,0,0,.5);
    }

    

`