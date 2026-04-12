import { createBrowserRouter } from "react-router";
import MainLayout from '../layout/MainLayout';
import Homepage from '../pages/homepage/Homepage';
import Books from '../pages/books/Books';
import Details from "../components/shared/books/Details";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout> ,
    children : [
      {
      index :true, 
      loader : ()=> fetch('/data/booksData.json'), 
      Component : Homepage
    } , 
    {
      path : "/books", 
      Component : Books
    }, 
    {
        path : "/books/details/:id",
        loader : ()=> fetch('/data/booksData.json'), 
        Component: Details 
    }
  ]
  },
]);
