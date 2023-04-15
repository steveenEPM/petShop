import axios from "axios"


const mypApi = (url, params, headerKey) => {
    const instancia = axios({
        method: 'post',
        url: url,
        baseURL: 'https://petshop2.onrender.com',
        data: params,
        headers: { 'key': headerKey },
        timeout: 10000
    })

    return instancia

}

export default mypApi