import React, { useEffect, useState } from 'react';
import PriceCard from '../priceCard/PriceCard';

const PriceList = () => {
    const [prices, setPrices] = useState([])
    useEffect(()=>{
        fetch('price.json')
        .then(resp => resp.json())
        .then(data => setPrices(data))
    },[])
    return (
        <div>
            <p className='text-5xl bg-purple-500 text-center text-white my-2 py-2 mx-7'>PriceList</p>
            <div className='grid md:grid-cols-3 gap-4 m-4'>
            {
                prices.map(price => <PriceCard key={price.id} price={price}></PriceCard>)
            }
            </div>
            
        </div>
    );
};

export default PriceList;