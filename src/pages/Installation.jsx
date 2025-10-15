import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const Installation = () => {
    const [sort, setSort] = useState('none')
    const [installationlist, setInstallationlist] = useState([])
    useEffect(() => {
        const savedList = JSON.parse(localStorage.getItem("installationlist"))
        if (savedList) setInstallationlist(savedList)
    }, [])

    const sortedItem = (() => {
        if (sort === 'downloads-asc') {
            return [...installationlist].sort((a, b) => a.downloads - b.downloads)
        } else if (sort === 'downloads-desc') {
            return [...installationlist].sort((a, b) => b.downloads - a.downloads)
        } else {
           return installationlist
        }
    })()

    const handleUninstall = (id) => {
        const existingList = JSON.parse(localStorage.getItem('installationlist'))
        let updatedList = existingList.filter(p => p.id !== id)
        setInstallationlist(updatedList)
        localStorage.setItem("installationlist", JSON.stringify(updatedList))
        return toast('App Uninstalled!!!')
    }


    return (
        <div className='container mx-auto'>
            <div className='text-center my-5'>
                <h1 className='text-2xl font-bold'>Your Installed Apps</h1>
                <p><small>Explore All Trending Apps on the Market developed by us</small></p>
            </div>
            <div className='flex flex-row justify-between mb-2'>
                <h3 className='font-semibold'><span className='text-sm text-gray-500'>({sortedItem.length})</span> Apps Found</h3>
                <label className='form-control max-w-xs'>
                    <select className='select select-bordered' value={sort} onChange={e => setSort(e.target.value)}>
                        <option value="none">Sort by downloads</option>
                        <option value="downloads-asc">Low-&gt;High</option>
                        <option value="downloads-desc">High-&gt;low</option>
                    </select>
                </label>
            </div>
            <div className='mb-10'>
                {
                    sortedItem.map(p =>

                        <div key={p.id} className='flex flex-row justify-between bg-white p-3 rounded-md items-center mb-2'>
                            <div className='flex flex-row gap-5 '>
                                <img className='h-15 w-15' src={p.image} alt="" />
                                <div>
                                    <h1 className='font-medium'>{p.title}</h1>
                                    <div className='flex flex-row gap-3'>
                                        <div className='flex flex-row items-center gap-1'>
                                            <img className='h-4 w-4' src="/public/icon-downloads.png" alt="" />
                                            <p>{p.downloads}</p>
                                        </div>
                                        <div className='flex flex-row items-center gap-1'>
                                            <img className='h-4 w-4' src='/public/icon-ratings.png' alt="" />
                                            <p>5</p>
                                        </div>
                                        <div>
                                            <p><span>{p.size}</span> MB</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <button className='bg-[#00D390] text-white px-2 py-1 rounded-sm hover:cursor-pointer' onClick={() => handleUninstall(p.id)}>Uninstall</button>
                            </div>
                        </div>
                    )
                }
            </div>

        </div>

    );
};

export default Installation;