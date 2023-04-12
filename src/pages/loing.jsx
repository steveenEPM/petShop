import { useState, useEffect } from 'react'

import Imag_LogIn from '../container/loing/container'
import Formulario from '../container/loing/fomulario'
import Loading from '../container/loading'
import '../styles/loing.css'


export default function Loing() {

    const [loading, setLoading] = useState(false)

 
    return (
        <>
            {
                !loading ?
                    <div className='Loing'>
                        <Imag_LogIn />
                        <Formulario loading={loading} setLoading={setLoading} />
                    </div>
                    :
                    <div>
                        <Loading />
                        <div className="burbujas">
                            <div>
                                <i className="fa-solid" style={{ color: "#000000" }}></i></div>
                            <div><i className="fa-solid" style={{ color: "#000000" }}></i></div>
                            <div><i className="fa-solid" style={{ color: "#000000" }}></i></div>
                            <div><i className="fa-solid" style={{ color: "#000000" }}></i></div>
                            <div><i className="fa-solid" style={{ color: "#000000" }}></i></div>
                            <div><i className="fa-solid" style={{ color: "#000000" }}></i></div>
                            <div><i className="fa-solid" style={{ color: "#000000" }}></i></div>
                        </div>
                    </div>

            }
        </>

    )

}