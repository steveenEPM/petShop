import styled from "styled-components"



export default function RadioButtons({ classI, names, color, sexo, colorS, onClick }) {

    return (
        <Componet id={names} className="radio-buttons" onClick={()=> onClick('sexo',names)}
            style={{
                background: sexo == names ? colorS : 'white'
            }}>
            <i className={classI} style={{ color: color }}></i>
            <span>{names}</span>
        </Componet>
    )

}


const Componet = styled.a`
    border: 2px solid rgba(0,0,0,.4);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap:20px;
    padding: 2% 2.5%;
    width: 120px;
    border-radius: 7px;
    i{
        font-size: 25px;
    }

    span{
        font-size: 14px;
        font-weight: 600;
        color: rgba(0,0,0,.6);
    }

    @media screen and (max-width:450px){
        padding: 2% 12px;
        width: 100%;
        gap:1px;
        i , span {
            font-size: 13px;
        }

        i{display:none;}
    }

`