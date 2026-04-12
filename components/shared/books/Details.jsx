import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const Details = () => {
    const {id} = useParams() ; 
    console.log(id) ;
    const books = useLoaderData() ; 
    console.log(books) ;

    const selectedBook = books.find(book => book.bookId == id ); 

    console.log(selectedBook) ;

    return (
        <div className='container mx-auto'>
            <div className="card lg:card-side bg-base-100 shadow-sm sm:gap-20" >
                <figure className='bg-base-200 min-w-5/12'>
                    <img
                    src={selectedBook.image}
                    alt=""
                    className='h-[500px] w-80 p-10' />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl ">{selectedBook.bookName}</h2>
                    <p>Author By: {selectedBook.author}</p>
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

                    <div>
                        <h3>Rating : {selectedBook.rating}</h3>
                        <h3>Number of Pages : {selectedBook.totalPages}</h3>
                        <h3>Publisher : {selectedBook.publisher}</h3>
                        <h3>Year of Publishing : {selectedBook.yearOfPublishing}</h3>
                    </div>
                 
                </div>
            </div>
        </div>
    );
};

export default Details;