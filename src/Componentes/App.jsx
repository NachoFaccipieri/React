import {Navbar} from './Navbar/Navbar'

export const App = () => {
  const valor = "esto es una variable"
  return (
    <div className="App" style={{"backgroundColor" : "#777"}}>
      {/* <Navbar nombre="La biblioteca del abuelo"/> */}
      <Navbar/>
    </div>
  );
}

