import {Navbar} from './Navbar/Navbar'
import { ItemListContainer } from './ItemListContainer/ItemListContainer';

export const App = () => {
  return (
    <div className="App">
      <Navbar cantidad={5}/>
      <ItemListContainer greeting="Mensaje"/>
    </div>
  );
}

