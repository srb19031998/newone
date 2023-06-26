import { useEffect, useState } from "react"

export const useFetch=(url:any)=>{
    const [data,setData]=useState<any>()
    const [loading,setLoading]=useState(true)
    const [err,setErr]=useState()
useEffect(()=>{
    (async()=>{
       let data= await fetch(url)
     data= await (await data).json()
     .catch((e)=>{
        setErr(e)
        setLoading(false)
     })
     setData(data)
     setLoading(false)
    })()
},[url])

    return {data,loading,err}
    
}