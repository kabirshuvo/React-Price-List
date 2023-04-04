import React from 'react';
import Feature from '../feature/Feature';

const PriceCard = ({price}) => {
    return (
        <div className='bg-purple-700 rounded py-4 px-4 flex flex-col'>
            <h3 className='text-3xl font-bold text-white text-center'>{price.name}</h3>
            <h2 className='text-white text-center'><span className='text-2xl font-bold '>{price.price}</span> <span className='text-xl'>/month</span></h2>
            <p className='underline ps-4 py-4 text-white font-semibold'>Features:</p>
            {
                price.features.map((feature, idx) =><Feature className='py-1'
                feature={feature}
                key={idx}
                ></Feature> )
            }
            <button className='mt-auto bg-white rounded-md py-2' >Buy Now</button>
        </div>
    );
};

export default PriceCard;