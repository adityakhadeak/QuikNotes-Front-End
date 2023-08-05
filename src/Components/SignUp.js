import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {BASE_URL} from '../helper.js'
const SignUp = (props) => {
  const navigate = useNavigate()
  const [userinfo, setUserInfo] = useState({ name: '', email: '', password: '', cpassword: '' })
  const { name, email, password, cpassword } = userinfo

  const handleSignup = async (e) => {
    e.preventDefault()
    if (password !== cpassword) {
      props.showAlert("danger","Please check Confirm Password")

    }
    else {
      const response = await fetch(`${BASE_URL}/api/auth/createuser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }) // body data type must match "Content-Type" header
      });
      const json = await response.json()
      if (json.success) {
        localStorage.setItem('token', json.authtoken)
        navigate('/')
        props.showAlert("success","Signed Up In successfully")
      }
      else {
        props.showAlert("success",json.message)      }
    }
  }

  const onChange = (e) => {
    setUserInfo({ ...userinfo, [e.target.name]: e.target.value })
  }
  return (
    <div>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title text-center">Sign Up</h5>
                <form onSubmit={handleSignup}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name='name' value={name} onChange={onChange} placeholder="Enter your name" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name='email' value={email} onChange={onChange} placeholder="Enter your email" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name='password' value={password} onChange={onChange} placeholder="Enter your password" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="cpassword"name='cpassword' value={cpassword}   onChange={onChange} placeholder="Confirm your password" />
                  </div>
                  <button type="submit" className="btn btn-primary ">Sign Up</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
