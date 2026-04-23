import React from 'react';
import heroImg from "../../../assets/pngwing1.png" ; 
const Hero = () => {
    return (
      <>
        <div className="hero min-h-[60vh] rounded-3xl border border-red-500/25 bg-linear-to-br from-black/90 via-zinc-900/80 to-red-950/70 px-4 shadow-xl">
          <div className="hero-content w-full max-w-6xl flex-col-reverse gap-10 py-12 lg:flex-row-reverse lg:justify-between">
            <img
              src={heroImg}
              className="w-full max-w-sm rounded-2xl border border-white/10 bg-white/5 p-4"
            />
            <div className='max-w-2xl'>
              <p className='mb-4 inline-block rounded-full border border-red-500/40 bg-red-500/10 px-4 py-1 text-sm font-semibold text-red-200'>Curated Reading Picks</p>
              <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl">
                Books to <span className='bg-linear-to-r from-red-400 to-red-600 bg-clip-text text-transparent'>freshen</span> up your bookshelf
              </h1>
              <p className='mt-4 text-zinc-300'>Discover thoughtful titles with clean summaries, ratings, and lists to help you choose your next favorite read.</p>
              <button className="mt-8 rounded-full border border-red-500/40 bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-500">
                View Books List
              </button>
            </div>
          </div>
        </div>

      </>
    );
};

export default Hero;