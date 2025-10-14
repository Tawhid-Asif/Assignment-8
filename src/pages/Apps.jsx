import React, { useState } from 'react';
import useProducts from '../hooks/useProducts';
import ProductCard from '../components/ProductCard';

const Apps = () => {
    const { products } = useProducts()
    const [search, setSearch] = useState("")
    const term = search.trim().toLocaleLowerCase()
    const searchedProducts = term ? products.filter(product => product.title.toLocaleLowerCase().includes(term)) : products

    return (
        <div className='w-[80%] mx-auto my-5'>
            <div className='text-center my-5'>
                <h1 className='text-2xl font-bold'>Our All Applications</h1>
                <p><small>Explore All Apps on the Market developed by us. We code for Millions</small></p>
            </div>
            <div className='flex flex-row justify-between items-center'>
                <h3 className='font-semibold'><span className='text-sm text-gray-500'>({searchedProducts.length})</span> Apps Found</h3>
                <label className='input w-[22%]'>
                    <input value={search} onChange={(e) => setSearch(e.target.value)} type='search' placeholder='Search' />
                </label>
            </div>
            {
                searchedProducts.length > 0 ? (<div className='grid grid-cols-2 md:grid-cols-4 gap-5 mt-5'>
                    {
                        searchedProducts.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
                    }
                </div>) : (<p className="text-center text-gray-500 text-lg font-medium mt-8">
           No App Found
        </p>)
            }
        </div>
    );
};

export default Apps;