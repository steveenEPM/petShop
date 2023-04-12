import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { createRef } from 'react';

const Loading = () => {

    const ref = createRef()

    return (
        <div>
            <i className="fa-regular fa-thumbs-up fa-beat" style={{ color: "#c1217b" }}></i>
            <span>Compra exitosa</span>
        </div>
    )
}

const sweetLoadig = () => {
    const MySwal = withReactContent(Swal)

    MySwal.fire({
        position: 'center',
        icon: 'success',
        title: 'Tu compra a sido exitosa',
        showConfirmButton: false,
        timer: 1500
    })

}

export default sweetLoadig