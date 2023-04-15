import styled from "styled-components";


export default function Dropdown({ cookies, iniciar, salir, myPerfil, indice }) {

    const onChange = (e) => {
        let checked = e.target.checked
        if (checked)
            return document.querySelector('.dropdown-content').style.display = "block"
        else
            return document.querySelector('.dropdown-content').style.display = "none"
    }

    return (
        <Element className="dropDown" >
            <label className="burger" htmlFor="burger">
                <input type="checkbox" id="burger" onChange={onChange} />
                <span></span>
                <span></span>
                <span></span>
            </label>
            <div className="dropdown-content">
                <button onClick={indice}>marquet</button>
                <button >quien soy</button>
                {
                    cookies['@element'] ?
                        <>
                            <button onClick={myPerfil}>
                                {localStorage.getItem("keys")}
                                <i className="fa-solid fa-house"></i>                            </button>
                            <div style={{ height: 40, border: "1px solid rgba(0,0,0,.1)", borderRadius: 190 }} />
                            <button onClick={salir}>
                                cerrar seccion
                                <i className="fa-solid fa-door-closed" style={{ color: "#7f1e53" }} />
                            </button>
                        </>
                        :
                        <button onClick={iniciar}>
                            Iniciar seccion
                            <i className="fa-solid fa-arrow-right-to-bracket" style={{ color: "7f1e50" }} />

                        </button>
                }
            </div>
        </Element>
    )

}




const Element = styled.div`
    background: none;
    visibility: hidden;
    position: absolute;
    margin-block: 10px;
    width: 92%;
    display: block;
    justify-content:flex-end;
    
    
    
    .burger {
        padding: 1px;
        position: relative;
        width: 15px;
        height: 20px;
        padding-inline:2%;
        background: transparent;
        cursor: pointer;
        display: flex;
        align-self: center;
        align-items: flex-end;
        justify-content: center;
        border-radius: 19px;
    }

    .burger input {
      display: none;
    }

    .burger span {
        display: block;
        position: absolute;
        height: 4px;
        width: 100%;
        background: #c1217b;
        border-radius: 9px;
        opacity: 1;
        left: 0;
        transform: rotate(0deg);
        transition: .25s ease-in-out;
    }

    .burger span:nth-of-type(1) {
        top: 0px;
        transform-origin: left center;
    }

    .burger span:nth-of-type(2) {
        top: 50%;
        transform: translateY(-50%);
        transform-origin: left center;
        }

    .burger span:nth-of-type(3) {
        top: 100%;
        transform-origin: left center;
        transform: translateY(-100%);
    }

    .burger input:checked ~ span:nth-of-type(1) {
        transform: rotate(45deg);
        top: -2px;
        left: 5px;

    }

    .burger input:checked ~ span:nth-of-type(2) {
        width: 0%;
        opacity: 0;
    }
    .burger input:checked ~ span:nth-of-type(3) {
        transform: rotate(-45deg);
        top: 18px;
        left: 5px;
    }

    .burger input:checked .dropdown-content{
        background-color: red;
    }

    .dropdown-content {
        display: none;
        left: 20%;
        background: white;
        position: absolute;
        width: 80%;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
        top: 150%;
        border-radius:12px;

    }

    .dropdown-content button{
        text-align: right;
        width: 92%;
        font-size:14px;
        display: flex;
        justify-content: space-between;
        
    }

`