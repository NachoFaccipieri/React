import {Navbar} from './Navbar/Navbar'
import { ItemListContainer } from './ItemListContainer/ItemListContainer';
import { ItemCount } from './ItemCount/ItemCount';

export const App = () => {
  return (
    <div className="App">
      <Navbar cantidad={5}/>
      <ItemListContainer greeting="Mensaje"/>
      <ItemCount ValInicial={1} stock={10}/>
    </div>
  );
}

