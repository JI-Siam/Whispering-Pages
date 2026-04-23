import React from 'react';
import Book from './Book';


const Books = ({books}) => {

    return (
        <div className='mt-20'>
                 <h3 className='mb-10 text-center text-4xl font-bold text-white md:text-5xl'>
                     Popular <span className='bg-linear-to-r from-red-400 to-red-600 bg-clip-text text-transparent'>Books</span>
            </h3>
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {books.map(book => <Book key={book.bookId} book={book}></Book>)}
            </div>
           
        </div>
    );
};

export default Books;