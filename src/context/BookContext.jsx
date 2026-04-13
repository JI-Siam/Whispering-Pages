import React, { Children, createContext } from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';

export const BookContext = createContext() ; 


const BookProvider = ({children}) => {

        const [storedBooks , setStoredBooks] = useState([]) ; 
        const [wishlistBooks , setWishlistdBooks] = useState([]) ; 
    
        const handleMarkRead = ({selectedBook})=> {
            // if clicked add the book to the stored books section 
            // check before adding 
            // if already stored show alert 
            // if not stored , add to the list 
        
                const isBookStored = storedBooks.find(book => book.bookId == selectedBook?.bookId) ; 
        
                if(isBookStored){
                    toast.error(`The book ${selectedBook.bookName} is already marked`) ; 
                }
                else{
                    setStoredBooks([...storedBooks , selectedBook]) ; 
                    toast.success(`The book ${selectedBook.bookName} is marked as Read`) ; 
                }
            }
         const handleWishlist = ({selectedBook})=> {
            // if clicked add the book to the stored books section 
            // check before adding 
            // if already stored show alert 
            // if not stored , add to the list 
        
                const isBookStored = wishlistBooks.find(book => book.bookId == selectedBook?.bookId) ; 

                const isBookStoredinReadlist = storedBooks.find(book => book.bookId == selectedBook.bookId) ; 

                if(isBookStoredinReadlist){
                    toast.error(`"${selectedBook.bookName}" already exists in Read List`) ; 
                    return ;
                }
        
                if(isBookStored){
                    toast.error(`The book ${selectedBook.bookName} is already in Wishlist`) ; 
                }
                else{
                   setWishlistdBooks([...wishlistBooks , selectedBook]) ; 
                    toast.success(`The book ${selectedBook.bookName} is added in Wishlist`) ; 
                }
            }

            const data = {
                storedBooks , setStoredBooks , handleMarkRead, wishlistBooks , setWishlistdBooks, handleWishlist
            }
    

    return (
        <BookContext.Provider value={data}>
           {children}
        </BookContext.Provider>
    );
};

export default BookProvider;