import React from 'react';
import { useParams } from 'react-router';
import useProducts from '../hooks/useProducts';

const AppDetails = () => {
    const { id } = useParams()
    const { products } = useProducts()
    const product = products.find(p => String(p.id) === id)
    const { image, companyName, downloads, ratingAvg, reviews, title } = product

    return (
        <div>
            <div>
                <img src={image} alt="" />
            </div>
            <div>
                <div>
                    <h1>{title}</h1>
                    <p><small>Developed by <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text'>{companyName}</span></small></p>
                </div>
                <div>
                    <div>
                        <img src='/icon-downloads.png' alt="" />
                        <p><small>Downloads</small></p>
                        <h1>{downloads}</h1>
                    </div>
                    <div>
                        <img src="/icon-ratings.png" alt="" />
                        <p><small>Average Ratings</small></p>
                        <h1>{ratingAvg}</h1>
                    </div>
                    <div>
                        <img src="/icon-review.png" alt="" />
                        <p><small>Total Reviews</small></p>
                        <h1>{reviews}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppDetails;