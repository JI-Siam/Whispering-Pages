import React, { useContext } from 'react';
import { BookContext } from '../../context/BookContext';
import Book from '../../components/homepage/books/Book';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadList from '../../components/shared/books/ReadList';
import WishList from '../../components/shared/books/WishList' ;

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
                <ReadList readBooks={storedBooks}></ReadList>   
            </TabPanel>
            <TabPanel>
                    <WishList wishlistBooks={wishlistBooks}></WishList>
            </TabPanel>
        </Tabs>

        </div>
    );
};

export default Books;