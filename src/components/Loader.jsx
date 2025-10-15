import React from 'react';

const Loader = ({count = 8}) => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-5">
      {[...Array(count)].map((_, i) => (
        <div key={i} className="card bg-base-200 shadow-md p-4 animate-pulse">
          <div className="skeleton h-40 w-full mb-4"></div>
          <div className="skeleton h-4 w-3/4 mb-2"></div>
          <div className="skeleton h-4 w-1/2"></div>
        </div>
      ))}
    </div>
    );
};

export default Loader;