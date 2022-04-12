import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className='flex nav-container md:px-40 items-center min-h-fit pb-4 md:pb-5 flex-col h-auto md:justify-between md:flex-row bg-purple-400  '>
            <div>
                <h1 className='heading text-4xl font-mono  font-bold text-white mt-5 '>Book Your Hotel</h1>
            </div>
            <div>
                <ul className='nav-item flex flex-col mt-5 items-center md:flex-row'>
                    <Link to='/home'>Home</Link>
                    
                    
                    <Link to='/rooms'>Your Rooms</Link>

                    <Link to='/login'>Login</Link>
                    <Link to='/signup'>Sign Up</Link>
                </ul>
            </div>
        </nav>
    );
};

export default Header;