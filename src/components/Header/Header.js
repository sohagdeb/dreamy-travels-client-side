import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();

    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        if (Object.values(user).length) {
            setIsLogin(true);
        }
    }, [user]);

    const getLogout = () => {
        logOut();
        window.location.reload(true);
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid">
                    <Link to='/home' className="navbar-brand"> <img style={{ width: '60px' }} src="/images/logo.png" alt="" /> </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link fs-5" to='/home'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fs-5" to='/services'>Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fs-5" to='/about'>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fs-5" to='/carts'>Cart</Link>
                            </li>

                            {
                                isLogin &&
                                <li className="nav-item">
                                    <Link className="nav-link fs-5" to='/manageOrder'>Manage Orders</Link>
                                </li>

                            }

                            {
                                isLogin &&
                                <li className="nav-item">
                                    <Link className="nav-link fs-5" to='/addservice'>Add Service</Link>
                                </li>
                            }

                        </ul>
                        <form className="d-flex">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                                {user.photoURL &&
                                    <img style={{ width: '30px', height: '30px', borderRadius: '30px', marginRight: '10px' }} src={user.photoURL} alt="" />
                                }
                                {
                                    user.displayName &&
                                    <span style={{ marginRight: '10px' }}>{user.displayName}</span>
                                }
                                <li className="nav-item">
                                    {user.email ?
                                        <Link className="nav-link" onClick={getLogout}>Log Out</Link>
                                        :
                                        <Link className="nav-link" to='/login'>Register</Link>
                                    }
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;