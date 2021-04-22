import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Inicio from './components/Inicio';
import ListarProductos from './components/ListarProductos';
import AgregarProducto from './components/AgregarProducto';
import Navigation from './components/common/Navigation';
import Footer from './components/common/Footer';
import EditarProducto from './components/EditarProducto';
import {useState, useEffect} from 'react';

function App() {

const URL = process.env.REACT_APP_API_URL;
const [productos, setProductos] = useState([]);

useEffect(() => {
  //llamar a la api
  consultarAPI();
},[])

const consultarAPI = async () => {
try {
  const respuesta = await fetch(URL);
  const informacion = await respuesta.json();
  if (respuesta.status === 200) {
    setProductos(informacion)
  }
  console.log(respuesta)
  
} catch (err) {
  console.log(err);
  //notificacion del error
}
}

  return (
    <Router>
      <Navigation/>
      <Switch>
        <Route exact path = '/'>
          <Inicio/>
        </Route>
        <Route exact path = '/productos'>
          <ListarProductos productos ={productos}/>
        </Route>
          <Route exact path = '/productos/nuevo-producto'>
          <AgregarProducto consultarAPI={consultarAPI}/>
        </Route>
          <Route exact path = '/productos/editar-producto'>
          <EditarProducto/>
        </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
