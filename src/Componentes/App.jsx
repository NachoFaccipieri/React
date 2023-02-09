import {Navbar} from './Navbar/Navbar'
import './App.css';

import {BrowserRouter, Route, Routes} from 'react-router-dom';


import { ItemListContainer } from './ItemListContainer/ItemListContainer';
import { ItemDetail } from './ItemDetail/ItemDetail';
import { ItemCount } from './ItemCount/ItemCount';
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer';



export const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar cantidad={5}/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:idCategoria' element={<ItemListContainer/>}/>
          <Route path='/Item/:id' element={<ItemDetailContainer/>}/>
        </Routes>
      </BrowserRouter>      
    </div>
  ) 
}

