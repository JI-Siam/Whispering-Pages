import React from 'react';
import Book from '../../homepage/books/Book';

const WishList = ({wishlistBooks}) => {
    return (
        <div className='mt-6'>
            {
                wishlistBooks.length == 0 ?
                 <div className='rounded-2xl border border-white/10 bg-white/5 p-16 text-center font-bold text-zinc-200'>No Books Added to Wishlist</div>
                 :  
                <div className='grid gap-8 md:grid-cols-2 xl:grid-cols-3'>
                        {wishlistBooks.map(book => <Book key={book.bookId} book={book}></Book>)}
                </div>
            }
            
        </div>
    );
};

export default WishList;
