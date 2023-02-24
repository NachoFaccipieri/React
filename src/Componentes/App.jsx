import './App.css';
import 'react-toastify/dist/ReactToastify.css';

import {BrowserRouter, Route, Routes} from 'react-router-dom';

import { ToastContainer} from 'react-toastify';


import {Navbar} from './Navbar/Navbar'
import { ItemListContainer } from './ItemListContainer/ItemListContainer';
import { ItemDetail } from './ItemDetail/ItemDetail';
import { ItemCount } from './ItemCount/ItemCount';
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer';
import { Checkout} from './Checkout/Checkout';
 import { Cart } from './Cart/Cart';

export const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar cantidad={5}/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:idCategoria' element={<ItemListContainer/>}/>
          <Route path='/Item/:id' element={<ItemDetailContainer/>}/>
          <Route path='/Checkout' element={<Checkout/>}/>
          <Route path='/Cart' element={<Cart/>}/>
        </Routes>
        <ToastContainer/>
      </BrowserRouter>
    </div>
  ) 
}

