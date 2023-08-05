import React from 'react'
import { useState } from 'react'
import userContext from '../Context/userContext'
import { useNavigate } from 'react-router-dom'
const MyInfo = (props) => {
    const navigate=useNavigate()
    const [loggedUser, setLoggedUser] = useState({
    
    })

    const getUser = async () => {
        const response = await fetch("http://localhost:5000/api/auth/getuser", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            }
        })
        const json= await response.json()
        setLoggedUser(json)
    }

    const deleteAcc= async()=>{
        const response = await fetch("http://localhost:5000/api/auth/deleteuser", {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            }
        })
        const json= await response.json()
        localStorage.removeItem('token')
        navigate('/login')
        props.showAlert("success","Account Deleted Successfully")
    }


    return (
        <userContext.Provider value={{loggedUser, getUser,deleteAcc }} >
            {props.children}
        </userContext.Provider>
    )
}

export default MyInfo
