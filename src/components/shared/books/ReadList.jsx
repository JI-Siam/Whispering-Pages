import React from 'react';
import Book from '../../homepage/books/Book';

const ReadList = ({readBooks}) => {
    return (
        <div className='m-10'>
            {
                readBooks.length == 0 ?
                 <div className='text-center p-40 font-bold bg-base-200 rounded-2xl'>No Books Marked As Read</div> 
                 :  
                <div className='grid grid-cols-3 gap-10 '>
                        {readBooks.map(book => <Book key={book.bookId} book={book}></Book>)}
                </div>
            }
            
        </div>
    );
};

export default ReadList;
