import { createBrowserRouter,BrowserRouter, Routes, Route, Link, NavLink, createRoutesFromElements, RouterProvider } from "react-router-dom";
import './App.css'

//Pages
import RootLayout from "./pages/RootLayout";
// components
import Home from "./components/Home/Home"
import Products from "./components/Products/Products"
import Sustanability from "./components/Sustanability/Sustanability"
import Favourites from "./components/Favourites/Favourites"
import ShoppingCart from "./components/ShoppingCart/ShoppingCart"
import ProductPage from "./components/ProductPage/ProductPage"

function App() {
  const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
        <Route index element={<Home />} />
        <Route path="type=:type" element={<Home />} />
        <Route path="Favourites" element={<Favourites />} />
        <Route path="ShoppingCart" element={<ShoppingCart />} />
        <Route path=":type/shop-by-products" element={ <Products/>}/>
        <Route path=":type/:index/product-page" element={ <ProductPage/>}/>
        <Route path="Sustanability" element={ <Sustanability/>}/>
        
    </Route>
  )
)
  return (
     <RouterProvider router={router} />
  )
}

export default App
