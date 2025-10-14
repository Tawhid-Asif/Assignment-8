import React from 'react';
import { useParams } from 'react-router';
import useProducts from '../hooks/useProducts';

const AppDetails = () => {
    const { id } = useParams()
    const { products, loading, error } = useProducts()
    const product = products.find(p => p.id == id)
    if (loading) return <p>loading...</p>
    const { image, companyName, downloads, ratingAvg, reviews, title, size,description } = product

    return (
        <div className='m-5'>
            <div className='flex flex-row gap-5 justify-items-start  my-5 border-b-1 border-gray-400 pb-5'>
                <div>
                    <img src={image} alt="" />
                </div>
                <div className='flex-1'>
                    <div className='border-b-1 border-gray-400'>
                        <h1 className='text-xl font-bold'>{title}</h1>
                        <p className='pb-3'><small>Developed by <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text'>{companyName}</span></small></p>
                    </div>
                    <div className='flex flex-row gap-8 md:gap-10 lg:gap-12 my-6'>
                        <div>
                            <img src='/icon-downloads.png' alt="" />
                            <p><small>Downloads</small></p>
                            <h1 className='text-xl font-bold'>{downloads}</h1>
                        </div>
                        <div>
                            <img src="/icon-ratings.png" alt="" />
                            <p><small>Average Ratings</small></p>
                            <h1 className='text-xl font-bold'>{ratingAvg}</h1>
                        </div>
                        <div>
                            <img src="/icon-review.png" alt="" />
                            <p><small>Total Reviews</small></p>
                            <h1 className='text-xl font-bold'>{reviews}</h1>
                        </div>
                    </div>
                    <div>
                        <button className='bg-[#00D390] px-3 py-1 text-white rounded-sm'>Install Now ({size} MB) </button>
                    </div>
                </div>
            </div>
            <div className='border-b-1 border-gray-400 pb-5 my-5'>
                <h3 className='text-lg font-bold'>Ratings</h3>
            </div>
            <div>
                <h3 className='text-lg font-bold'>Description</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default AppDetails;