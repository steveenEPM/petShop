import { createRef } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

export default function Imag_LogIn() {


    const refPlay = createRef()

    return (
        <div className='img'>
            <Player
                ref={refPlay} // set the ref to your class instance
                autoplay
                loop
                src="https://assets8.lottiefiles.com/packages/lf20_syqnfe7c.json"
                style={{ height: '400px', width: '400px', zIndex: 2, position: "relative" }}
            ></Player>
            <div className="burbujas">
                <div>
                    <i className="fa-solid" style={{ color: "#000000" }}></i></div>
                <div><i className="fa-solid" style={{ color: "#000000" }}></i></div>
                <div><i className="fa-solid" style={{ color: "#000000" }}></i></div>
                <div><i className="fa-solid" style={{ color: "#000000" }}></i></div>
                <div><i className="fa-solid" style={{ color: "#000000" }}></i></div>

            </div>
        </div>
    )

}