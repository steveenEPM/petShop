import { useEffect } from "react"
import { useCallback } from "react"
import styled from "styled-components"

import '../styles/checkItems.css'


export const CheckItems = ({ label, onClick, estado }) => {


    return (
        <Element
        >
            <a onClick={onClick} id={estado} className="filter">
                {label}
            </a>


        </Element>
    )

}

export const CheckItems2 = ({ label, count , onClick }) => {

    return (
        <Element>
            <a onClick={()=> onClick(label)}>
                <label>
                    {label}
                </label>

                {
                    count !== 0 && <label style={{ color: 'rgba(0,0,0,.5)', marginLeft: '42px' }}>
                        {count}
                    </label>
                }
            </a>

        </Element>
    )

}

const Element = styled.div`

    display: flex;
    flex-direction: row;
    font-size: 10px;
    border-radius: 5px;
    text-transform:capitalize;
    cursor:pointer;
    
    :hover{
        background-color:rgba(193, 33, 123,0.15)        
    }
`

