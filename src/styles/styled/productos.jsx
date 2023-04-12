import styled from "styled-components";

//Contenido

export const Container1 = styled.div`

    padding: 2% 2%;
    display: grid;
    grid-template-columns: repeat(5,200px);
    
    gap:30px;

    
`


/**Filtro */
export const Container2 = styled.div`

    padding: 2% 1%;
    display: flex;
    flex-direction: column;
    gap:40px;

    
    .container{
        display:flex;
        flex-direction: column;
        
        height: 200px;
        border-bottom-style:solid;
        border-width: 1px;
        border-color: rgba(0,0,0,.5);

        span{
            font-weight: bold;
            font-size: 18px;
        }

        div {
       
            display: flex;
            flex-direction: column;
            gap:7px;

        }

    }

    

`