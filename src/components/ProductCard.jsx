import React from 'react';

const ProductCard = ({product}) => {
     const {image,title,downloads,ratingAvg} = product 
    return (
        <div className='bg-gray-50 p-2 rounded-md'>
            <figure>
                <img className='rounded-md' src={image} alt="" />
            </figure>
            <div>
                <h3 className='font-semibold'>{title}</h3>
            </div>
            <div className='flex flex-row justify-between mt-2'>
                <div className='flex flex-row gap-2 items-center bg-green-100 px-1 rounded-md text-green-500'>
                    <img className='h-3 w-3' src="../../public/icon-downloads.png" alt="" />
                    <p><small>{downloads}</small></p>
                </div>
                <div className='flex flex-row gap-2 items-center bg-red-100 px-1 rounded-md text-orange-400'>
                    <img className='h-3 w-3' src="../../public/icon-ratings.png" alt="" />
                    <p><small>{ratingAvg}</small></p>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;