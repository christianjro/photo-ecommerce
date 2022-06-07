import './App.css';
import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"

import Header from "./components/Header"
import Cart from "./pages/Cart"
import Photos from "./pages/Photos"

function App() {    
    return (
        <div>
          <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Photos/>} />
                <Route path="/cart" element={<Cart/>} />
            </Routes>
          </BrowserRouter>
        </div>
    )
}

export default App
