import { useState } from "react"
import { useCookies } from 'react-cookie'
import { useNavigate } from "react-router-dom"

import Cantidad from "../../components/cantidad"
import myApi from '../../hooks/axios'
import sweetLoadig from "../../components/alerts1"

export default function Descripcion({ element, setElement }) {
    const [cantidad, setCantidad] = useState(1)

    const [cookies, setCookie] = useCookies(['@element']);

    const navigate = useNavigate()



    const onClick = () => {
        if (!cookies["@element"]) return navigate('/loing')


        myApi('usuario/setComprar', { cantidad, precio: element.precio, estado: false, idProducto: element._id }, cookies["@element"])
            .then(e => sweetLoadig())
            .catch(error => {
                console.log(error.response)
                let { data } = error.response
                if (data === "Aceso denegado") navigate('/loing')
            })
    }


    return (
        <div className="Container">
            <div className="container1">
                <h2>
                    {element.nombre}
                </h2>
                <span>
                    $ {element.precio}
                </span>
            </div>

            <span>
                {element.descripcion}
            </span>

            <div className="container2">
                <Cantidad cantidad={cantidad} setCantidad={setCantidad} />
                <button className="btnCarts" onClick={onClick}>
                    <i className="fa-sharp fa-solid fa-cart-plus" ></i>
                    Comprar
                </button>
            </div>

        </div>
    )

}

