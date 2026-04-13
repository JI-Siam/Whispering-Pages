import React from 'react';
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router';



const Book = ({book}) => {

  console.log(book.tags) ;
    return (
        <Link to={`/details/${book.bookId}`}>

            <div className="card bg-base-200  w-96 shadow-sm hover:">
  <figure     className= "w-full p-10">
    <img
      src={book.image}
      alt="Shoes" 
      className='h-[250px]'/>
  </figure>

  <div className="card-body">
     <div className=' flex gap-4'>
       {book.tags.map(element => (
        <span className='bg-red-600/10 px-4 py-2 rounded-full'>{element}</span>
       ))
    }
    </div>

    <h2 className="card-title">
      {book.bookName}
      <div className="badge badge-error ">NEW</div>
    </h2>
    <p>By : {book.author}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-error badge-outline">{book.rating}<FaStar className='text-yellow-400'></FaStar></div>
      <div className="badge badge-outline">{book.category}</div>
    </div>
  </div>
</div>
            
        </Link>
    );
};

export default Book;