import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { createRef } from 'react';


const sweetLoadig = (str) => {
    const MySwal = withReactContent(Swal)

    MySwal.fire({
        position: 'center',
        icon: 'error',
        title: str,
        showConfirmButton: true,
        timer: 5000
    })

    return MySwal

}

export default sweetLoadig