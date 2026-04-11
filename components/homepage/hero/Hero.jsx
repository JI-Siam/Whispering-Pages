import React from 'react';
import heroImg from "../../../src/assets/pngwing1.png" ; 
const Hero = () => {
    return (
      <>
<div className="hero bg-base-200 min-h-[60vh] container mx-auto rounded-2xl">
  <div className="hero-content w-10/12 flex-col lg:flex-row-reverse justify-between">
    <img
      src={heroImg}
      className="rounded-lg"
    />
    <div>
      <h1 className="text-5xl font-bold">Books to <span className='text-red-500'>freshen</span> up your bookshelf</h1>
      <button className="btn btn-error btn-outline mt-10">View Books List</button>
    </div>
  </div>
</div>

      </>
    );
};

export default Hero;