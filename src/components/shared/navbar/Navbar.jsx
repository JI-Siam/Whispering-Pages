import React from 'react';
import {NavLink} from 'react-router' ;
import {Link} from 'react-router' ;

const Navbar = () => {
    return (
      <>
        <div className="max-lg:collapse sticky top-0 z-40 mb-8 lg:mb-12 w-full rounded-2xl border border-red-500/30 bg-linear-to-r from-black/95 via-zinc-950/95 to-red-950/70 shadow-xl backdrop-blur">
          <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
          <label htmlFor="navbar-1-toggle" className="fixed inset-0 hidden max-lg:peer-checked:block"></label>

          <div className="collapse-title navbar px-4 lg:px-6">
            <div className="navbar-start">
              <label htmlFor="navbar-1-toggle" className="mr-2 rounded-lg border border-red-500/30 p-2 text-red-200 lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </label>
              <button className="text-2xl font-extrabold tracking-tight text-white lg:text-3xl">
                <span className='bg-linear-to-r from-red-400 to-red-600 bg-clip-text text-transparent'>Whispering</span> Pages
              </button>
            </div>

            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal gap-2 px-1">
                <NavLink
                  to="/"
                  className={({isActive}) =>
                    `rounded-full px-5 py-2 font-semibold transition ${isActive ? 'bg-red-600 text-white' : 'text-zinc-200 hover:bg-white/10'}`
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/books"
                  className={({isActive}) =>
                    `rounded-full px-5 py-2 font-semibold transition ${isActive ? 'bg-red-600 text-white' : 'text-zinc-200 hover:bg-white/10'}`
                  }
                >
                  Listed Books
                </NavLink>
              </ul>
            </div>

            <div className="navbar-end gap-2">
              <button className='rounded-full border border-red-500/40 bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-500'>Login</button>
              <button className="rounded-full border border-white/20 bg-black/50 px-4 py-2 text-sm font-semibold text-zinc-100 transition hover:border-red-400/60 hover:text-white">Signup</button>
            </div>
          </div>

          <div className="collapse-content lg:hidden z-1 px-4 pb-4">
            <ul className="flex flex-col gap-2 rounded-xl border border-white/10 bg-black/40 p-3 text-zinc-200">
              <Link to="/" className='rounded-lg px-3 py-2 hover:bg-white/10'>Home</Link>
              <Link to="/books" className='rounded-lg px-3 py-2 hover:bg-white/10'>Listed Books</Link>
            </ul>
          </div>
        </div>
      </>
    );
};

export default Navbar;