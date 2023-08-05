import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Navbar = (props) => {
    const navigate = useNavigate()
    const location =useLocation()
    const logout=()=>{
        localStorage.removeItem('token')
        navigate('/login')
        props.showAlert("success","Logged Out Successfully")
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" href="#">QuikNotes</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname==='/home'? 'active':''}`}  aria-current="page"  to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname==='/about'? 'active':''}`} to="/about">About</Link>
                            </li>

                        </ul>
                        <div className="d-flex" >
                            
                            {!localStorage.getItem("token") &&<button className="btn btn-primary mx-1" onClick={()=>{navigate('/login')}} type="submit">Login</button>}
                            {!localStorage.getItem("token") && <button className="btn btn-primary mx-1" onClick={()=>{navigate('/signup')}} type="submit">SignUp</button>}
                            {localStorage.getItem("token") &&<button className="btn btn-primary mx-1" onClick={logout} type="submit">Log Out</button>}
                        
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
