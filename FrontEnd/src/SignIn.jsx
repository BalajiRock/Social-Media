import React, { useState } from 'react'
import './SignIn.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignIn(props) {

    const [values, setValues] = useState({
        UserName: '',
        Password: ''
    })
    const navigate = useNavigate()
    // const [error,setError] = useState({}) later validation
    const handleSubmit =(event)=>{
        event.preventDefault();
        // setError(validation(values));
        axios.post('http://localhost:3000/',values)
        .then(res => {
            if (res.data === "Success"){
                navigate('/Home',{state:{id:1,name:values.UserName}});

            }
            else{
                alert("failed to login")
            }}
            )
        .catch(err => console.log(err));
    }
    const handleInput = (event)=>{
        setValues(prev=>({...prev,[event.target.name]:[event.target.value]}))  
    }

    console.log(values.UserName)

    return (
        <div className="main">
            <div className="outer">
                <form action="" onSubmit={handleSubmit}>
                    <div className="credentials">
                        <input type='text' name='UserName' value={values.UserName} onChange={handleInput} placeholder='User Name' />
                    </div>
                    <div className="credentials">
                        <input type='password' name='Password' value={values.Password} onChange={handleInput} placeholder='Password' />
                    </div>
                    <button type='submit' className="btn">Sign In</button>

                </form>
            </div>
            <div>
                <Link to="/SignUp"> Sign Up</Link>
                <Link to="/">Forgot Password?</Link>
            </div>
        </div>
    );
}

export default SignIn;

