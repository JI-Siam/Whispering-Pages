import React, { useContext, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { useLoaderData, useParams } from 'react-router';
import { BookContext } from '../../../context/BookContext';

const Details = () => {
    const {id} = useParams() ; 
    const books = useLoaderData() ; 
    const selectedBook = books.find(book => book.bookId == id ); 

    const {handleMarkRead , handleWishlist}= useContext(BookContext) ;



    return (
        <div className='container mx-auto'>
            <div className="card lg:card-side bg-base-100 shadow-sm sm:gap-20" >
                <figure className='bg-base-200 min-w-5/12'>
                    <img
                    src={selectedBook.image}
                    alt=""
                    className='h-[500px] w-85 p-5' />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl ">{selectedBook.bookName}</h2>
                    <p className='italic'>{selectedBook.author}</p>
                           <div className="divider"></div>
                    <h2>{selectedBook.category}</h2>
                            <div className="divider"></div>
                     <div>
                        <h3><span className='font-bold'>Review </span>: {selectedBook.review}</h3>
                        <br />
                         <div className=' flex gap-4 items-center'>
                            <h3 className='font-bold'>Tag: </h3>
                            {selectedBook.tags.map(element => (
                                <span className='bg-red-500/20 px-4 py-2 rounded-2xl'>#{element}</span>
                            ))
                            }
                         </div>
                    </div>

                                 <div className="divider"></div>

                    <div className='grid grid-cols-2 font-semibold'>
                        <h3>Rating : </h3> <h3>{selectedBook.rating}</h3>
                        <h3>Number of Pages : </h3> <h3>{selectedBook.totalPages}</h3>
                        <h3>Publisher : </h3> <h3>{selectedBook.publisher}</h3>
                        <h3>Year of Publishing : </h3> <h3>{selectedBook.yearOfPublishing}</h3>
                    </div>

                    <div className="flex gap-5">
                        <button className='btn ' onClick={()=> handleMarkRead({selectedBook})}>Mark as Read</button>
                        <button className='btn btn-error btn-outline' onClick={()=> handleWishlist({selectedBook})}>Add to Wishlist</button>
                    </div>
                 
                </div>
            </div>
        </div>
    );
};

export default Details;