import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Category from './pages/Category';
import Product from './pages/Product';
import CartItem from './components/cartItem';
import Login from './pages/Login';
import Footer from './pages/Footer'
import bannermens from './assets/bannermens.png'
import bannerwomens from './assets/bannerwomens.png'
import bannerkids from './assets/bannerkids.png'

export default function App() {
  return (
    <main className="bg-primary text-tertiary">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mens" element={<Category Category='men' banner={bannermens}/>}/>
          <Route path="/womens" element={<Category Category='women' banner={bannerwomens}/>} />
          <Route path="/kids" element={<Category Category='kid' banner={bannerkids}/>} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart-page" element={<CartItem />} />
          <Route path="/logIn" element={<Login />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </main>
  );
}
