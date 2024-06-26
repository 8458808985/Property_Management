import React, { useEffect } from 'react'
import {  useNavigate } from 'react-router-dom';


export const Protected = (children) => {
  
    const Component = children.Component
    const navigate = useNavigate();
    useEffect(()=>{
        let tokendata = localStorage.getItem('token');   
        if(tokendata == null) {
            navigate("/")
        }
    },[])
  return (
    <>
     <Component/>
    </>
  )
}


