import React from 'react';
import { PacmanLoader } from 'react-spinners';

const LoadingSpinner = () => {
    return (
        <div className='flex justify-center items-center'>
          <PacmanLoader></PacmanLoader>
        </div>
    );
};

export default LoadingSpinner;