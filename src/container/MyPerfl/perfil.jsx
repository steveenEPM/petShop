import styled from "styled-components";

export default function Perfil({ usuario, fecha, email, mobile }) {
    return (
        <Container>
            <div className="imagen" style={{
                backgroundImage: "url('https://i.pinimg.com/564x/1d/28/6f/1d286f0577580b24c1696e44c8b87524.jpg')",
            }} />
            <span> {usuario} </span>
            <span className="etiq" >
                <i className="fa-solid fa-cake-candles" style={{ color: "rgba(0,0,0,.5)" }} />
                {fecha}
            </span>
            <div style={{display:"flex",flexDirection:"row",gap:70,marginTop:12}}>
                <span className="etiq des">
                    <i className="fa-solid fa-envelope" style={{ color: "#595959" }} />
                    {email}
                </span>
                <span className="etiq des">
                    <i className="fa-solid fa-mobile-button" style={{color: "#878787"}}/>
                    {mobile}
                </span>
            </div>
        </Container>
    )
}


const Container = styled.div`
    display: flex;
    flex-direction: column;
    transform: translateY(-95px);
    align-items: center;

    .imagen {
        border-radius: 150px;
        height: 150px;
        width: 150px;
        background-size: 150px 150px;
        border-image-source: linear-gradient(140.06deg, #FFFFFF -19.15%, rgba(0, 0, 0, 0) 118.08%);
        border:3px;
        margin-bottom:12px;
    }

    span {
        font-size: 18px;
        font-weight: 700;
        margin-bottom: 4px;
    }

    

    .etiq {
        display: flex;
        flex-direction: row;
        gap: 12px;
        font-size: 15px;
        color: rgba(0,0,0,0.5);
    }

    .des{
        font-size: 18px;
        font-weight: normal;
        color: rgba(0,0,0,1);
    }

`
