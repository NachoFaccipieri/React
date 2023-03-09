import './App.css';
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';

// import { getProductos } from '../utils/firebase';
import { CarritoProvider } from '../context/CarritoContext';

import { Navbar } from './Navbar/Navbar'
import { ItemListContainer } from './ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer';
import { Checkout } from './Checkout/Checkout';
import { Cart } from './Cart/Cart';
//import { cargarBDD } from '../utils/firebase';

export const App = () => {
  //cargarBDD();
  // getProductos();
  return (
    <div className="App">
      <BrowserRouter>
        <CarritoProvider>
          <Navbar/>
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:idCategoria' element={<ItemListContainer />} />
            <Route path='/Item/:id' element={<ItemDetailContainer />} />
            <Route path='/Checkout' element={<Checkout />} />
            <Route path='/Cart' element={<Cart />} />
          </Routes>
          <ToastContainer />
        </CarritoProvider>
      </BrowserRouter>
    </div>
  )
}

