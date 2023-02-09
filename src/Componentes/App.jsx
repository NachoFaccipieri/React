import {Navbar} from './Navbar/Navbar'

import {BrowserRouter, Route, Routes} from 'react-router-dom';


import { ItemListContainer } from './ItemListContainer/ItemListContainer';
import { ItemCount } from './ItemCount/ItemCount';



export const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar cantidad={5}/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:idCategoria' element={<ItemListContainer/>}/>
          <Route path='/Item/:id' element={<ItemListContainer/>}/>
        </Routes>
      </BrowserRouter>      
    </div>
  ) 
}

