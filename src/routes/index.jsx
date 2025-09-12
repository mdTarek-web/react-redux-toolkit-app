import React from 'react'
import Home from '../pages/Home';
import Error from '../pages/Error';
import { BrowserRouter, Routes, Route }  from "react-router-dom";
import Navbar from '../layouts/Navbar';
import BooksView from '../feature/books/BooksView';
import AddBook from '../feature/books/addBook';
import EditBook from '../feature/books/EditBook';

const Index = () => {
  return (
    <BrowserRouter>
    <Navbar/>
       <main>
         <Routes>
            <Route path="/"  element={<Home/>}/>
            <Route path="/show-books"  element={<BooksView/>}/>
            <Route path="/add-book"  element={<AddBook/>}/>
            <Route path="/edit-book"  element={<EditBook/>}/>
            <Route path="*"  element={<Error/>}/>
        </Routes>
       </main>
    </BrowserRouter>
  )
}

export default Index;