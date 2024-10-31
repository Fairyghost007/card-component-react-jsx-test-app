import React from 'react';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';
const firstName = "Fairyghost007";
const App = () => {
  
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 flex flex-col items-center ">
      <div className="bg-gray-900 shadow-lg rounded-lg p-6 max-w-sm transform cursor-pointer">
        <div ><Image /></div>
        <div className="mt-4 text-center">
          <Name />
          <Description />
          <Price />
        </div>
      </div>
      <p className="mt-4 text-lg font-medium">
        {firstName ? `Hello, ${firstName}!` : "Hello, there!"}
      </p>

      {firstName && (
        <img
          src="https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj"
          alt="Your Avatar"
          className="mt-4 w-16 h-16 rounded-full border border-gray-500"
        />
      )}
    </div>
  );
};

export default App;
