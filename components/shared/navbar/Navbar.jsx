import React from 'react';
import {NavLink} from 'react-router' ;
import {Link} from 'react-router' ;

const Navbar = () => {
    return (
      <>
        <div className="max-lg:collapse bg-base-200 lg:mb-20 shadow-sm w-full rounded-md ">
  <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
  <label htmlFor="navbar-1-toggle" className="fixed inset-0 hidden max-lg:peer-checked:block"></label>
  <div className="collapse-title navbar">
    <div className="navbar-start">
      <label htmlFor="navbar-1-toggle" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <button className="btn btn-ghost text-3xl font-extrabold"><span className='text-red-500'>Whispering</span> Pages</button>
    </div>
   
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1 space-x-2.5">
        <NavLink to="/" className={({isActive}) => 
            `btn ${isActive ? "btn-error btn-outline" : "" }`
        }>Home</NavLink>
        <NavLink to="/books" className={({isActive}) => 
            `btn ${isActive ? "btn-error btn-outline" : "" }`
        }>Listed Books</NavLink>
      </ul>
    </div>
    <div className="navbar-end space-x-2.5">
      <button className='btn btn-error'>Login</button>
      <button className="btn btn-check">Signup</button>
    </div>
  </div>

  <div className="collapse-content lg:hidden z-1">
    <ul className="menu">
      <Link to="/"><button>Home</button></Link>
      <Link to="/books"><button>Listed Books</button></Link>

    </ul>
  </div>
</div>
      </>
    );
};

export default Navbar;