import React from 'react';
import { useNavigate } from 'react-router-dom';

const BooksRoom = ({ hotel }) => {
    const { name, price, img } = hotel;
    const navigate = useNavigate();

    return (
        <div className='border-2 border-gray-400 p-2 rounded-lg w-full md:w-96'>
            <img className='rounded w-full' src={img} alt="" />
            <h4 className='mt-4 text-2xl text-center font-bold text-purple-500'>{name}</h4>
            <h5 className='text-xl font-bold text-center text-gray-400 mt-3'>Price:$ {price}</h5>
            <div className='text-center mt-5'>
                <button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 inline-block mx-auto hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={() => { navigate('/rooms') }}ck>Book Now</button>
            </div>
          
        </div>
    );
};

export default BooksRoom;