import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { FcKey } from 'react-icons/fc';

import { getUserData, logoutUser } from '../redux/actions/users';

const Navbar = () => {
    const isAuth = useSelector(({users}) => users.isAuth)
    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch(logoutUser())
    }

    useEffect(() => {
        dispatch(getUserData());
    }, [isAuth, dispatch]);

    
    return (
        <>
            <nav className='navbar'>
                <div className='navbar__container'>
                    <Link to='/' className='navbar__logo'>
                        Test <FcKey className='navbar__logo-icon'/>
                    </Link>
                    <ul className='navbar__menu'>
                        <li className='navbar__menu-item'>
                            <Link to='/'>
                                Main
                            </Link>
                        </li>
                        <li className='navbar__menu-item'>
                            <Link to='/registr'>
                                Registration
                            </Link>
                        </li>
                        <li className='navbar__menu-item'>
                            {isAuth ? <div onClick={() => onLogout()}>Exit</div> : 
                            <Link to='/login'>
                                Login
                            </Link>}

                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
