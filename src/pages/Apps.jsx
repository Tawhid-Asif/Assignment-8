import React, { useState } from 'react';
import useProducts from '../hooks/useProducts';
import ProductCard from '../components/ProductCard';
import Loader from '../components/Loader';


const Apps = () => {
    const { products, loading } = useProducts()
    const [search, setSearch] = useState("")
    const [searchLoading, setSearchLoading] = useState(false);

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearch(value);
        setSearchLoading(true);
        setTimeout(() => setSearchLoading(false), 700)
    }

    const term = search.trim().toLocaleLowerCase()
    const searchedProducts = term ? products.filter(product => product.title.toLocaleLowerCase().includes(term)) : products;

    const showLoader = loading || searchLoading;

    return (
        <div className='w-[80%] mx-auto my-5'>
            <div className='text-center my-5'>
                <h1 className='text-2xl font-bold'>Our All Applications</h1>
                <p><small>Explore All Apps on the Market developed by us. We code for Millions</small></p>
            </div>
            <div className='flex flex-row justify-between items-center'>
                <h3 className='font-semibold'><span className='text-sm text-gray-500'>({searchedProducts.length})</span> Apps Found</h3>
                <label className='input w-[22%]'>
                    <input value={search} onChange={handleSearch} type='search' placeholder='Search' />
                </label>
            </div>
            {showLoader ? (
                <Loader count={12} /> 
            ) : searchedProducts.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-5">
                    {searchedProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-500 text-lg font-medium mt-8">
                    No App Found
                </p>
            )}
        </div>
    );
};

export default Apps;