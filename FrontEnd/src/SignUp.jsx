import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

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
        ;

    }
    const handleInput = (event)=>{
        setValues(prev=>({...prev,[event.target.name]:[event.target.value]}))
    }


    return (
        <div className='main'>
            <div className="outer">
                <form action="" onSubmit={handleSubmit}>
                    <div className="FullName">
                        <input type="text" name='FullName' value={values.FullName} onChange={handleInput} placeholder='Full Name' />
                    </div>
                    <div className="PhoneNo">
                        <input type="text" name='PhoneNo' value={values.PhoneNo} onChange={handleInput} placeholder='Phone Number' />
                    </div>
                    <div className="DOB">
                        <input type="date" name='DOB' value={values.DOB} onChange={handleInput} placeholder='Date of Birth' />
                    </div>
                    <div className="Email">
                        <input type="text" name='Email' value={values.Email} onChange={handleInput} placeholder='Email' />
                    </div>
                    <div className="UsesName">
                        <input type="text" name='UserName' value={values.UserName} onChange={handleInput} placeholder='User Name' />
                    </div>
                    <div className="Password">
                        <input type="Pass" name='Password' value={values.Password} onChange={handleInput} placeholder='Password' />
                    </div>
                    <button type='submit'>Sign Up</button>
                    <div>
                        <Link to="/"> Sign In</Link>
                    </div>

                </form>

            </div>

        </div>
    )
}

export default SignUp
