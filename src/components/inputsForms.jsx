import styled from "styled-components"

export default function Inputs({ max, name, placeholder, autoComplete, onChange, label, type, error }) {

    return (
        <Componest className="inputGroup">
            <label style={{ color: error == true ? "red" : "rgba(0,0,0,.5)" }}>{label}</label>
            <input type={type} max={max} min={6} name={name} aria-label="label-form" placeholder={placeholder}
                required a onChange={onChange}
                style={{
                    border:error == true ? "2px solid rgb(255,0,0)": "2px solid rgba(0,0,0,.4)",
                    color: error == true ? "red" : "rgba(0,0,0,1)"
                }}

            />
        </Componest>
    )

}

const Componest = styled.div`

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
            border: 2px solid rgba(193, 33, 123,1);
            color: black;
        }
    }

    label{
        font-weight: 500;
        text-transform: capitalize;
        color: rgba(0,0,0,.5);
    }

    @media screen and (max-width:450px){
        width: 100%;
        label {
            font-size: 13px;
        }

        input {
            padding: 7px 12px;
            font-size: 13px;
        }
    }

`