import axios from "axios"
const mypApi2 = (url, params) => {
    const instancia = axios({
        method: 'post',
        url: url,
        baseURL: 'http://10.50.50.241:3232',
        data: params,
        timeout: 50000,
    })

    return instancia

}

export default mypApi2