import React from 'react';

const Footer = () => {
    return (
      <div className='bg-[#001931] '>
        <div className='container mx-auto py-10 text-white'>
          <div className='flex justify-between'>
          <div className='flex flex-row gap-3 items-center'>
            <img className='h-15 w-15' src="/logo.png" alt="" />
            <p className='text-xl font-bold'>App Store</p>
          </div>
          <div>
            <p>Scoial Links</p>
            <div className='flex flex-row gap-2'>
              <img src="/fi_5969020 (1).svg" alt="" />
              <img src="/Frame 1171277689.svg" alt="" />
              <img src="/public/Group.svg" alt="" />
            </div>
          </div>
        </div>
        <div className='text-center border-t-2 border-gray-400 mt-5 pt-5 '>
          <p><small>Copyright © 2025 - All right reserved</small></p>
        </div>
        </div>
      </div>
         
    );
};

export default Footer;