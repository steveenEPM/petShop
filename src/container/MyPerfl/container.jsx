import styled from "styled-components"

export default function Container({ fecha }) {

    return (
        <Elements>
            <span>
                <i className="fa-solid fa-cake-candles" style={{ color: "#6b6b6b" }}></i>
                {fecha}
            </span>
        </Elements>
    )

}




const Elements = styled.div`
    display: flex;
    margin-top: 9%;
    border:1px solid;

    span {
        font-size: 15;
        font-weight:700;
        display: flex;
        flex-direction: row;
        color: rgba(0,0,0,1);
        gap: 20px;
        border: 1px solid red;
        align-self: center;
    }
    
`