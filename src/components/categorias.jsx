import styled from "styled-components";


/**Items de Categorias */
const Item_Categoria = ({ ide, icons, label, onPress }) => {




    return (
        <Element ide={ide} onClick={onPress} className="itemCategorys">
            <i className={icons} />
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

    width: 150px;
    height: 130px;
    padding:1.5% .5%;
    border-radius: 200px;
    border-style: none;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.15);
    gap:10px;
   

    :hover{
        background-color: rgb(127, 30, 83);
        box-shadow: 0px 0px 30px 5px rgb(127, 30, 83);
    }
    i{
        color: #ffffff; 
        font-size: 50px;
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