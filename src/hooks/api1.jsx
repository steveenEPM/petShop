import axios from 'axios'
import { useState, useEffect } from 'react'

export const Server = (url) => {

    const [data, setData] = useState(undefined)

    useEffect(() => {
        axios.post(url).then(e => {
            setData(e.data)
        }).catch(err => {
            console.log(err)
        })
    },[])

    return data
}

export const Server2 = (url,params,callback) => {

  
        axios.post(url,params).then(e => {
            callback(e.data)
        }).catch(err => {
            console.log(err)
        })
  
}

