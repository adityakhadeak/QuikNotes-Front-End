import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import userContext from '../Context/userContext'
function MyAccount() {
    const navigate=useNavigate()
    const { loggedUser, getUser,deleteAcc } = useContext(userContext)
    useEffect(() => {
        if (localStorage.getItem('token') == null) {
            navigate("/login")
        }
        else {
            getUser()
        }
        // eslint-disable-next-line
    }, [])

    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title my-2">User Information</h5>
                                <p className='my-1'><strong>Name</strong> </p>
                                <p className='my-1 mx-2'>{loggedUser.name}</p>
                                <p className='my-1'><strong>Email</strong> </p>
                                <p className='my-1 mx-2'>{loggedUser.email}</p>

                                <button className="btn btn-danger mt-3" onClick={()=>deleteAcc()} id="deleteAccountBtn">Delete Account</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyAccount
