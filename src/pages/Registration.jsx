import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from '../redux/actions/users';
import { Redirect } from 'react-router';

import useInput from '../hooks/InputHook';

const Registration = () => {
    const dispatch = useDispatch();
    const email = useInput('', {isEmpty: true, minLenght: 3, isEmail: true});
    const password = useInput('', {isEmpty: true, minLenght: 6});
    const isAuth = useSelector(({users}) => users.isAuth);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createUser(email.value, password.value));
    };

    if (isAuth) return <Redirect to='/'/>
    
    return (
        <div className='form-container container'>
            <form className='form' onSubmit={handleSubmit} >
                <h1>Join</h1>
                {(email.isDirty && email.isEmpty) && <div style={{color: 'red'}}>Данное поле не может быть пустым</div>}
                {(email.isDirty && email.minLengthError) && <div style={{color: 'red'}}>Мало символов</div>}
                {(email.isDirty && email.emailError) && <div style={{color: 'red'}}>Это не может быть адресом почты</div>}
                <input onChange={e => email.onChange(e)} onBlur={e => email.onBlur(e)} value={email.value} name='email' type='text' placeholder='Enter email'></input>
                {(password.isDirty && password.isEmpty) && <div style={{color: 'red'}}>Данное поле не может быть пустым</div>}
                {(password.isDirty && password.minLengthError) && <div style={{color: 'red'}}>Мало символов</div>}
                <input onChange={e => password.onChange(e)} onBlur={e =>password.onBlur(e)} value={password.value} name='password' type='password' placeholder='Enter password'></input>
                <button 
                disabled={!email.inputValid || !password.inputValid}
                type='submit'>
                    Submit
                </button>
            </form>
        </div>
    )
};

export default Registration;