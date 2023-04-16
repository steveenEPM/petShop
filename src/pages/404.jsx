import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { createRef } from 'react';

export default function NotFound() {
    const ref = createRef()

    return (
        <Player
            ref={ref}
            autoplay
            loop
            src="https://assets4.lottiefiles.com/packages/lf20_vzj1xd0x.json"
            style={{ height: '400px', width: '400px', marginTop: '9%' }}
        >
        </Player>
    )
}