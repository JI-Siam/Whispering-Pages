import React from 'react';
import Hero from '../../components/homepage/hero/Hero';
import Books from '../../components/homepage/books/Books';
import { useLoaderData } from "react-router";

const Homepage = () => {
    const books = useLoaderData() ;
        return (
        <div>
              <Hero></Hero>
              <h1> Total books : {books.length}</h1>
              <Books books={books}></Books>
        </div>
    );
};

export default Homepage;