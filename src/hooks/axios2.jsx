import axios from "axios"
const mypApi2 = (url, params) => {
    const instancia = axios({
        method: 'post',
        url: url,
        baseURL: 'http://localhost:3030',
        data: params,
        timeout: 10000,
    })

    return instancia

}

export default mypApi2