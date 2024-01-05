import React, { useState } from 'react'
import './SignIn.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {Button, Breadcrumb, Card, Form, Container, Row, Col, Image,Nav,Navbar, Tab, Tabs, NavItem} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

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
            <header className='App-header'>
            <div className="outer">
                <form action="" onSubmit={handleSubmit}>
                    <div className="credentials" style={{padding:"15px"}}>
                        <input type='text' name='UserName' value={values.UserName} onChange={handleInput} placeholder='User Name' style={{borderRadius:"10px"}} />
                    </div>
                    <div className="credentials" style={{padding:"15px"}}>
                        <input type='password' name='Password' value={values.Password} onChange={handleInput} placeholder='Password'  style={{borderRadius:"10px"}}/>
                    </div>
                    <Button type='submit' className="btn">Sign In</Button>

                </form>
            </div>
            <div>
                <Link to="/SignUp" style={{textDecoration:"none"}}> Sign Up</Link>
            </div>
            </header>
        </div>
    );
}

export default SignIn;

