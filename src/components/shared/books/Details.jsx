import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { BookContext } from '../../../context/BookContext';

const Details = () => {
    const {id} = useParams() ; 
    const books = useLoaderData() ; 
    const selectedBook = books.find(book => book.bookId == id ); 

    const {handleMarkRead , handleWishlist}= useContext(BookContext) ;



    return (
        <div className='mb-16'>
            <div className="overflow-hidden rounded-3xl border border-red-500/25 bg-linear-to-br from-black/90 via-zinc-900/90 to-red-950/60 shadow-xl lg:grid lg:grid-cols-2" >
                <figure className='flex items-center justify-center border-b border-white/10 bg-white/5 p-8 lg:border-b-0 lg:border-r'>
                    <img
                        src={selectedBook.image}
                        alt={selectedBook.bookName}
                        className='h-107.5 w-full max-w-sm rounded-xl border border-white/10 object-contain p-4' />
                </figure>

                <div className="space-y-5 p-8 text-zinc-200">
                    <h2 className="text-3xl font-bold text-white">{selectedBook.bookName}</h2>
                    <p className='italic text-zinc-300'>By {selectedBook.author}</p>
                    <div className='inline-block rounded-full border border-red-500/40 bg-red-500/10 px-4 py-1 text-sm font-semibold text-red-200'>{selectedBook.category}</div>

                    <div>
                        <h3 className='font-semibold text-white'>Review</h3>
                        <p className='mt-2 leading-relaxed text-zinc-300'>{selectedBook.review}</p>
                    </div>

                    <div className='flex flex-wrap gap-2'>
                        {selectedBook.tags.map(element => (
                            <span key={element} className='rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-sm text-red-200'>#{element}</span>
                        ))}
                    </div>

                    <div className='grid grid-cols-2 gap-y-2 rounded-xl border border-white/10 bg-black/30 p-4 text-sm md:text-base'>
                        <h3 className='font-semibold text-zinc-300'>Rating:</h3><h3>{selectedBook.rating}</h3>
                        <h3 className='font-semibold text-zinc-300'>Number of Pages:</h3><h3>{selectedBook.totalPages}</h3>
                        <h3 className='font-semibold text-zinc-300'>Publisher:</h3><h3>{selectedBook.publisher}</h3>
                        <h3 className='font-semibold text-zinc-300'>Year of Publishing:</h3><h3>{selectedBook.yearOfPublishing}</h3>
                    </div>

                    <div className="flex flex-wrap gap-3 pt-2">
                        <button
                            className='rounded-full border border-white/20 bg-white/10 px-5 py-2 font-semibold text-white transition hover:bg-white/20'
                            onClick={()=> handleMarkRead({selectedBook})}
                        >
                            Mark as Read
                        </button>
                        <button
                            className='rounded-full border border-red-500/40 bg-red-600 px-5 py-2 font-semibold text-white transition hover:bg-red-500'
                            onClick={()=> handleWishlist({selectedBook})}
                        >
                            Add to Wishlist
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;