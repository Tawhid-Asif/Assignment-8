import React from 'react';
import { Link } from 'react-router';

const AppNotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center p-6">
      <img
        src="/App-Error.png"
        alt="App Not Found"
        className="w-64 mb-6"
        onError={(e) => (e.target.style.display = "none")}
      />
      <h1 className="text-4xl font-bold text-red-500 mb-2">
        App Not Found 
      </h1>
      <p className="text-gray-600 mb-6 max-w-md">
        The App you are requesting is not found on our system.  please try another apps.
      </p>
      <Link
        to="/apps"
        className="px-4 py-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white rounded-lg"
      >
        Browse All Apps
      </Link>
    </div>
    );
};

export default AppNotFound;