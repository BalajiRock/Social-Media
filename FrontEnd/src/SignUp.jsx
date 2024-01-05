import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {Button, Breadcrumb, Card, Form, Container, Row, Col, Image,Nav,Navbar, Tab, Tabs, NavItem} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function SignUp() {

    const [values, setValues] = useState({
        FullName: '',
        PhoneNo: '',
        DOB:'',
        Email: '',
        UserName: '',
        Password: '',

    })
    const navigate = useNavigate()
    const handleSubmit =event=>{
        event.preventDefault()
        axios.post('http://localhost:3000/SignUp',values)
        .then(res =>navigate('/'))
        .catch(err => console.log(err));
    }
    const handleInput = (event)=>{
        setValues(prev=>({...prev,[event.target.name]:[event.target.value]}))
    }


    return (
        <div className='main'>
            <header className='App-header'>
            <div className="outer">
                <form action="" onSubmit={handleSubmit}>
                    <div className="FullName" style={{padding:"10px"}} >
                        <input type="text" name='FullName' value={values.FullName} onChange={handleInput} placeholder='Full Name' style={{borderRadius:"10px"}} />
                    </div>
                    <div className="PhoneNo" style={{padding:"10px"}} >
                        <input type="text" name='PhoneNo' value={values.PhoneNo} onChange={handleInput} placeholder='Phone Number' style={{borderRadius:"10px"}} />
                    </div>
                    <div className="DOB" style={{padding:"10px"}} >
                        <input type="date" name='DOB' value={values.DOB} onChange={handleInput} placeholder='Date of  Birth' style={{borderRadius:"10px"}}/>
                    </div>
                    <div className="Email" style={{padding:"10px"}} >
                        <input type="text" name='Email' value={values.Email} onChange={handleInput} placeholder='Email'  style={{borderRadius:"10px"}}/>
                    </div>
                    <div className="UsesName" style={{padding:"10px"}} >
                        <input type="text" name='UserName' value={values.UserName} onChange={handleInput} placeholder='User Name' style={{borderRadius:"10px"}} />
                    </div>
                    <div className="Password" style={{padding:"10px"}} >
                        <input type="Pass" name='Password' value={values.Password} onChange={handleInput} placeholder='Password'  style={{borderRadius:"10px"}}/>
                    </div>
                    <Button type='submit'>Sign Up</Button>
                    <div>
                        <Link to="/" style={{textDecoration:"none"}}> Sign In</Link>
                    </div>

                </form>

            </div>
            </header>
        </div>
    )
}

export default SignUp
