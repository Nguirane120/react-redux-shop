import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { ProductDetails } from "./components/ProductDetails";
import ProductListing from "./components/ProductListing";
import './App.css'


function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route  path="/" element={<ProductListing/>} />
    <Route path="/product/:productId" element={<ProductDetails/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
