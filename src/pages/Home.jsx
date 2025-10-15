import React from 'react';
import { Link } from 'react-router';
import ProductCard from '../components/ProductCard';
import useProducts from '../hooks/useProducts';
import Loader from '../components/Loader';




const Home = () => {
     
    const { products, loading } = useProducts()
    const trendingP = products.slice(0, 8)
    return (
        <div className='my-8'>
            <div className='w-[50%] mx-auto'>
                <div className='flex flex-col text-center'>
                    <h1 className='text-4xl font-bold'>We Build</h1>
                    <h1 className='text-4xl font-bold'><span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text'>Productive</span> Apps</h1>
                    <p>At App Store, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                </div>
                <div className='flex flex-row gap-3 justify-center py-5'>
                    <div>
                        <Link to="https://play.google.com/store/">
                            <button className='flex flex-row btn bg-base-100 '><img className='h-5 w-5' src="/PlayStore.svg" alt="" /> <p>Google Play</p></button>
                        </Link>
                    </div>
                    <div>
                        <Link to="https://www.apple.com/app-store/"><button className='flex flex-row btn bg-base-100 '><img className='h-5 w-5' src="/AppStore.svg" alt="" />App Store</button></Link>
                    </div>
                </div>
                <div>
                    <img src="/hero.png" alt="" />
                </div>
            </div>
            <div className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-gray-100 py-5'>
                <div className='flex flex-col justify-center items-center'>
                    <div className='text-center'>
                        <h1 className='text-3xl'>Trusted by Millions, Built for You</h1>
                    </div>
                    <div className='flex flex-row gap-5 pt-3'>
                        <div className='text-center'>
                            <p><small>Total Downloads</small></p>
                            <h1 className='text-2xl font-bold'>29.9M</h1>
                            <p><small>21% more than last month</small></p>
                        </div>
                        <div className='text-center'>
                            <p><small>Total Reviews</small></p>
                            <h1 className='text-2xl font-bold'>906K</h1>
                            <p><small>46% more than last month</small></p>
                        </div>
                        <div className='text-center'>
                            <p><small>Active Apps</small></p>
                            <h1 className='text-2xl font-bold'>132+</h1>
                            <p><small>31 more will Launch</small></p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='text-center pt-5'>
                    <h1 className='text-3xl font-bold'>Trending Apps</h1>
                    <p>Explore All Trending Apps on the Market developed by us</p>
                </div>
                <div className="w-[80%] mx-auto">
                    {loading ? (
                        <Loader count={8} />
                    ) : (
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-5">
                            {trendingP.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <div className='text-center'>
                <div className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-8 mt-8">
                    <Link to='/apps'>
                        <button>Show All</button></Link>
                </div>
            </div>

        </div>
    );
};

export default Home;