import axios from "axios"
const mypApi = (url, params, headerKey) => {
    const instancia = axios({
        method: 'post',
        url: url,
        baseURL: 'https://petshop2.onrender.com',
        data: params,
        headers: { 'key': headerKey }
    })

    return instancia

}

export default mypApi