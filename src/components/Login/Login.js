import React from 'react';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase-init';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    /* navigate form requiredAuth from location (requiredAuth.js) */
    
    const from = location?.state?.from?.pathname || "/";

    if(user){
        navigate(from, {replace: true});
    }

    const handleUserSignIn = event => {
        /* Change form submit default-behaviour */
        event.preventDefault();
        signInWithEmailAndPassword(email, password)
    }

    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Login</h2>
                <form onSubmit={handleUserSignIn} action="">
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>
                    {/* error-message : jodi error message thake tahole message tah show korbe... */}
                    <p style={{color: 'red'}}>{error?.message}</p>
                    {/* loading : loading jodi true hoy tahole Loading hbe... */
                        loading && <p>Loading...</p>
                    }
                    <input className='form-submit' type="submit" value="Login" required />
                </form>
                <p className='signup'>New to Ema-john? <Link className='form-link' to="/signup">Create New Account</Link></p>
                <div className='or-sign'>
                    <div className='or-line'></div> <span className='or-text'>or</span> <div className='or-line'></div>
                </div>
                <button className='google-button'>
                    <svg className='google-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" /></svg>
                    Continue with Google
                </button>
            </div>
        </div>
    );
};

export default Login;