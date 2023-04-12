import { useEffect ,useState} from "react"

import Imag_Sing from "../container/singIn/container"
import Formulario from "../container/singIn/fomulario"
import Loading from "../container/loading"
import '../styles/singIn.css'


export default function SingIn() {

    const [loading, setLoading] = useState(false)


  


    return (
        <>
            {
                !loading ? <div div className="SingIn">
                    <Formulario setLoading={setLoading}/>
                    <Imag_Sing />
                </div> :
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