import styled from "styled-components";

//Contenido

export const Container1 = styled.div`

    padding: 2% 2%;
    display: grid;
    grid-template-columns: repeat(5,200px);
    
    gap:30px;

    @media screen and (max-width: 480px) {
        display: flex;
        justify-content: center;
        flex-direction: column;
        overflow-y: scroll;
        .itemList{
            width: 60%;
            margin:0% 20% ;
        }
    }


        @media screen and (max-width:1050px) and (min-width:450px) {
                display: grid;
                grid-template-columns: repeat(3,1fr);
            
        }

    
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

    @media screen and (max-width: 480px) {
        display: none;
    }

`