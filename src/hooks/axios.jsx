import axios from "axios"


const mypApi = (url, params, headerKey) => {
    const instancia = axios({
        method: 'post',
        url: url,
        baseURL: 'http://10.50.50.241:3232',
        data: params,
        headers: { 'key': headerKey },
        timeout: 50000
    })

    return instancia

}

export default mypApi