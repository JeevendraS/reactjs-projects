import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Protected({children, authentication= true}) {
    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStauts = useSelector(state => state.auth.status)
     
    useEffect(()=>{
        if(authentication && authStauts !== authentication){
            navigate("/login")
        }else if(!authentication && authStauts !== authentication){
            navigate("/")
        }
        setLoader(false)
    },[authStauts, navigate, authentication])
  return loader? <h1>Loading...</h1> : <>{children}</>
}


