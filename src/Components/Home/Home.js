import React from 'react';
import useHotels from '../../hooks/useHotels';
import BooksRoom from '../BooksRoom/BooksRoom';
import './Home.css'

const Home = () => {
    const [hotels, setHotels] = useHotels(); 
    return (
        <div>
            <h2 className='text-5xl mb-10 font-bold text-purple-600 text-center mt-10'>Welcome To Our Comfort Zone</h2>

            <div className='rooms-container mt-5 px-20 w-full md:px-10'>
                {
                    hotels.map(hotel => <BooksRoom key={hotel.id} hotel ={hotel}></BooksRoom>)
                }
            </div>
        </div>
    );
};

export default Home;