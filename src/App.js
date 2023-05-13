import './App.css'

import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import NavBar from './components/NavBar/NavBar'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

import { CartProvider } from './context/CartContext'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
  return (    
    <div className = "App">
      
      <BrowserRouter>    
        <CartProvider>
          <Header />
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={'Elige uno de nuestros productos'}/>} />
            <Route path='/category/:categoryId' element={<ItemListContainer/>} />
            <Route path='/item/:itemId' element={<ItemDetailContainer/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/checkout' element={<Checkout/>} />
            <Route path='*' element={<h2>404 NOT FOUND</h2>} />
          </Routes>
          <Footer />    
        </CartProvider>
       </BrowserRouter>
    </div>
  );
}

export default App;