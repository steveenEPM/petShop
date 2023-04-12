import axios from "axios"
const mypApi2 = (url, params) => {
    const instancia = axios({
        method: 'post',
        url: url,
        baseURL: 'https://petshop2.onrender.com',
        data: params,
    })

    return instancia

}

export default mypApi2