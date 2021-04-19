import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';

const Home = () => {
    const isAuth = useSelector(({users}) => users.isAuth);
    const email = useSelector(({users}) => users.email);
    if (!isAuth) return <Redirect to='/login' />

    return (
        <div>
            <div className='home container'>
            <h1 className='home__title'>Hello, user!<br/>Your email: {email}</h1>
            </div>
        </div>
    )
}

export default Home;