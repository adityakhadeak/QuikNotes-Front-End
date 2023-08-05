import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {BASE_URL} from '../helper.js'

const Login = (props) => {
    const navigate = useNavigate()
    const [credential, setCredential] = useState({ email: '', password: '' })
    const { email, password } = credential

    const handleLogin = async (e) => {
        e.preventDefault()
        const response = await fetch(`${BASE_URL}/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }) // body data type must match "Content-Type" header
        });
        const json = await response.json()
        if (json.success) {
            navigate('/')
            localStorage.setItem('token',json.authtoken)
            props.showAlert("success","Logged In successfully")
        }
        else {
            props.showAlert("danger","Invalid credentials")
        }
    }

    const onChange = (e) => {
        setCredential({ ...credential, [e.target.name]: e.target.value })
    }
    return (
        <div>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title text-center my-3">Login to access your notes</h4>
                                <form onSubmit={handleLogin}>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email address</label>
                                        <input type="email" className="form-control" value={email} name='email'onChange={onChange} id="email" placeholder="Enter your email" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input type="password" className="form-control" value={password} name='password'onChange={onChange} id="password" placeholder="Enter your password" />
                                    </div>
                                    <button type="submit" className="btn btn-primary ">Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
