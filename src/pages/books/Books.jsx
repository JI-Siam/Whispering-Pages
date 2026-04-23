import React, { useContext } from 'react';
import { BookContext } from '../../context/BookContext';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ReadList from '../../components/shared/books/ReadList';
import WishList from '../../components/shared/books/WishList' ;

const Books = () => {
    const {storedBooks , wishlistBooks} = useContext(BookContext) ; 
    return (
        <div className="rounded-3xl border border-red-500/25 bg-linear-to-b from-black/85 to-zinc-950/85 p-4 md:p-8">
            <h1 className='mb-6 text-center text-3xl font-bold text-white md:text-4xl'>Your <span className='bg-linear-to-r from-red-400 to-red-600 bg-clip-text text-transparent'>Library</span></h1>
            <Tabs>
                <TabList className='mx-auto mb-6 flex w-full max-w-md justify-center gap-3 rounded-full border border-white/10 bg-black/50 p-2'>
                    <Tab
                        className='cursor-pointer rounded-full px-5 py-2 font-semibold text-zinc-300 outline-none transition hover:bg-white/10'
                        selectedClassName='bg-red-600 text-white'
                    >
                        Read List
                    </Tab>
                    <Tab
                        className='cursor-pointer rounded-full px-5 py-2 font-semibold text-zinc-300 outline-none transition hover:bg-white/10'
                        selectedClassName='bg-red-600 text-white'
                    >
                        Wish List
                    </Tab>
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