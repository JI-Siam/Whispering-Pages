import React from 'react';
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router';



const Book = ({book}) => {
    return (
        <Link to={`/details/${book.bookId}`}>

            <div className="h-full rounded-2xl border border-red-500/20 bg-linear-to-b from-zinc-900/90 to-black/80 p-5 shadow-lg transition hover:-translate-y-1 hover:border-red-400/50 hover:shadow-red-900/30">
              <figure className="mb-5 rounded-xl border border-white/10 bg-white/5 p-6">
                <img
                  src={book.image}
                  alt={book.bookName}
                  className='mx-auto h-62.5 object-contain'/>
              </figure>

              <div className="space-y-4">
                <div className='flex flex-wrap gap-2'>
                  {book.tags.map(element => (
                    <span key={element} className='rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-xs font-semibold text-red-200'>{element}</span>
                  ))}
                </div>

                <h2 className="flex items-center gap-2 text-xl font-bold text-white">
                  {book.bookName}
                  <span className="rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">NEW</span>
                </h2>
                <p className='text-zinc-300'>By: {book.author}</p>
                <div className="flex items-center justify-between gap-3 text-sm">
                  <div className="inline-flex items-center gap-1 rounded-full border border-red-500/40 bg-black/40 px-3 py-1 font-semibold text-zinc-100">
                    {book.rating}
                    <FaStar className='text-yellow-400'></FaStar>
                  </div>
                  <div className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-zinc-200">{book.category}</div>
                </div>
              </div>
            </div>
            
        </Link>
    );
};

export default Book;