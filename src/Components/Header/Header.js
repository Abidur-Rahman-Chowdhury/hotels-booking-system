import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className='flex items-center min-h-fit pb-4 md:pb-5 flex-col h-auto md:justify-between md:flex-row bg-purple-400  px-3 '>
            <div>
                <h1 className='text-4xl font-mono font-semibold font-bold '>Book Your Hotel</h1>
            </div>
            <div>
                <ul className='nav-item flex flex-col items-center md:flex-row'>
                    <Link to='/'>Home</Link>
                    <Link to='/book-rooms'>Book Rooms</Link>
                    
                    <Link to='/rooms'>Your Rooms</Link>

                    <Link to='/login'>Login</Link>
                    <Link to='/signup'>Sign Up</Link>
                </ul>
            </div>
        </nav>
    );
};

export default Header;