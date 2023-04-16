import styled from "styled-components"
import { useTransition } from "react"

const Cantidad = ({ cantidad, setCantidad }) => {

    const [isPending, startTransition] = useTransition()

    /**Aumentar cantidad */
    const plus = () => {
        startTransition(() => {
            setCantidad(cantidad + 1)
        })
    }

    /**Disminuir cantidad */
    const minus = () => {
        startTransition(() => {
            if (cantidad == 1) {
                setCantidad(1)
            } else {
                setCantidad(cantidad - 1)
            }

        })
    }

    return (
        <Componet>
            <span>Cantidad</span>
            <div>
                <a onClick={plus} aria-label="plus">
                    <i className="fa-solid fa-plus" style={{ color: "#ffffff" }} />
                </a>
                <div>
                    <span>
                        {cantidad}
                    </span>
                </div>

                <a onClick={minus} aria-label="minus">
                    <i className="fa-solid fa-minus" style={{ color: "#ffffff" }} />
                </a>
            </div>

        </Componet>
    )

}


const Componet = styled.div`
    display:flex;
    flex-dirction:row;
    gap:20px;
    align-items:center;

    span{
        font-weight:500;
        font-size:17px;
    }

   div {
        display:flex;
        flex-dirction:row;
        gap:10px;
        align-items:center;

        a {
            background-color: rgb(193, 33, 123);  
            border-style: none;
            border-radius: 360px;
            height: 20px;
            width: 3px;
            display: flex;
            justify-content: center;
            align-items:center;
            cursor:pointer;

        }

        div {
            border-radius: 190px;
            border-style: solid;
            border-width: 2px;
            border-color: rgb(193, 33, 123);
            transform: translateY(-12px);
            height: 36px;
            width: 35px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

    @media screen and (max-width: 450px) {
        align-items: flex-start;
        
    }
   

`


export default Cantidad

