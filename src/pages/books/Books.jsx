import React, { useContext } from 'react';
import { BookContext } from '../../context/BookContext';
import Book from '../../components/homepage/books/Book';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Books = () => {
    const {storedBooks , wishlistBooks} = useContext(BookContext) ; 

    console.log(storedBooks) ;
    return (

        <div className="container mx-auto">
             <Tabs>
            <TabList>
            <Tab>Read List</Tab>
            <Tab>Wish List</Tab>
            </TabList>

            <TabPanel>      
                <div className='grid grid=cols-3 gap-10 '>
                        {storedBooks.map(book => <Book key={book.bookId} book={book}></Book>)}
                </div>
            </TabPanel>
            <TabPanel>
                 <div className='grid grid=cols-3 gap-10 '>
                        {wishlistBooks.map(book => <Book key={book.bookId} book={book}></Book>)}
                </div>
            </TabPanel>
        </Tabs>

        </div>
    );
};

export default Books;