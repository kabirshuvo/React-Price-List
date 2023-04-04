
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import React from 'react';

const Feature = ({feature}) => {
   
    return (
        <div className='ps-4 py-1 flex items-center'>
            <CheckCircleIcon className="h-5 w-5 text-blue-500" />
            <span className='ps-2'>{feature}</span>

            
        </div>
    );
};

export default Feature;