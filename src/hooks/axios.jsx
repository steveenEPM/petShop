import axios from "axios"


const mypApi = (url, params, headerKey) => {
    const instancia = axios({
        method: 'post',
        url: url,
        baseURL: 'https://petshop3.onrender.com',
        data: params,
        headers: { 'key': headerKey },
        timeout: 40000
    })

    return instancia

}

export default mypApi