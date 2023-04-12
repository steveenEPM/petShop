import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { createRef } from 'react';

export default function Loading() {

    const ref = createRef()

    return (
        <Player
            ref={ref}
            autoplay
            loop
            src="https://assets9.lottiefiles.com/packages/lf20_r8hvhwns.json"
            style={{ height: '300px', width: '300px', marginTop:'9%' }}
        >
        </Player>
    )
}