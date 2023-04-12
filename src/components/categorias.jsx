import styled from "styled-components";


/**Items de Categorias */
const Item_Categoria = ({ ide, uri, label, width, height, onPress}) => {


    return (
        <Element ide={ide} onClick={onPress} className="itemCategorys">
            <img src={uri} style={{width,height}} />
            <span>
                {label}
            </span>

        </Element>
    )

}

const Element = styled.button`
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 210px;
    height: 210px;
    padding:1.5% .5%;
    border-radius: 150px;
    border-style: none;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.15);
    gap:15px;
   

    :hover{
        
        animation-duration: 13s;
        background-color: rgb(127, 30, 83);
        img {
            position: absolute;
            z-index: 1;
            transform: scale(1.3);
        }

        span{
            visibility: hidden;
        }
    }

     span {
        text-transform: capitalize;
        color: white;
        font-size: 18px;
        font-weight: 900;
     
        color: white;
    }

    background: hsla(326, 71%, 44%, 1);
`

export default Item_Categoria