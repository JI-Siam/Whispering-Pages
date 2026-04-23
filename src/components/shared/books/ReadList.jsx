import React from 'react';
import Book from '../../homepage/books/Book';

const ReadList = ({readBooks}) => {
    return (
        <div className='mt-6'>
            {
                readBooks.length == 0 ?
                 <div className='rounded-2xl border border-white/10 bg-white/5 p-16 text-center font-bold text-zinc-200'>No Books Marked As Read</div>
                 :  
                <div className='grid gap-8 md:grid-cols-2 xl:grid-cols-3'>
                        {readBooks.map(book => <Book key={book.bookId} book={book}></Book>)}
                </div>
            }
            
        </div>
    );
};

export default ReadList;
