import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import NotFound from "./pages/NotFound";

import ScrollToTop from "./components/ScrollToTop";


function App() {

  const [darkMode, setDarkMode] = useState(false);


  return (

    <BrowserRouter>

      <div
        className={
          darkMode
            ? "app dark-mode"
            : "app light-mode"
        }
      >

        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />


        <Routes>

          <Route
            path="/"
            element={<Home darkMode={darkMode}/>}
          />


          <Route
            path="/products"
            element={<Products darkMode={darkMode}/>}
          />


          <Route
            path="/product/:id"
            element={<ProductDetails darkMode={darkMode}/>}
          />


          <Route
            path="*"
            element={<NotFound/>}
          />

        </Routes>


        <ScrollToTop/>


        <Footer darkMode={darkMode}/>


      </div>

    </BrowserRouter>

  );
}


export default App;