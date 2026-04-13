import React from 'react';
import Book from './Book';


const Books = ({books}) => {

    return (
        <div>
             <h3 className='text-center text-5xl font-bold my-10 '>Books</h3>
            <div className="container mx-auto grid sm:grid-cols-3 gap-10">
            {books.map(book => <Book key={book.bookId} book={book}></Book>)}
            </div>
           
        </div>
    );
};

export default Books;