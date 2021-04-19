import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/actions/users';
import { Redirect } from 'react-router';

import useInput from '../hooks/InputHook';


const Login = () => {
    const dispatch = useDispatch();
    const email = useInput('', {isEmpty: true, minLenght: 3, isEmail: true});
    const password = useInput('', {isEmpty: true, minLenght: 6});
    const isAuth = useSelector(({users}) => users.isAuth);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginUser(email.value, password.value));
    };

    if (isAuth) return <Redirect to='/'/>
    
    return (
        <div className='form-container container'>
            <form className='form' onSubmit={handleSubmit}>
                <h1 className='form__title'>Login</h1>
                {(email.isDirty && email.isEmpty) && <div style={{color: 'red'}}>pusto</div>}
                {(email.isDirty && email.minLengthError) && <div style={{color: 'red'}}>malo</div>}
                {(email.isDirty && email.emailError) && <div style={{color: 'red'}}>emailError</div>}
                <input className='form__input' onChange={e => email.onChange(e)} onBlur={e => email.onBlur(e)} value={email.value} name='email' type='text' placeholder='Enter email'></input>
                {(password.isDirty && password.isEmpty) && <div style={{color: 'red'}}>pusto</div>}
                {(password.isDirty && password.minLengthError) && <div style={{color: 'red'}}>malo</div>}
                <input className='form__input' onChange={e => password.onChange(e)} onBlur={e =>password.onBlur(e)} value={password.value} name='password' type='password' placeholder='Enter password'></input>
                <button
                disabled={!email.inputValid || !password.inputValid}
                type='submit'>
                    Submit
                </button>
            </form>
        </div>
    )
};

export default Login;