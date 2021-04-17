import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Inicio from './components/Inicio';
import ListarProductos from './components/ListarProductos';
import AgregarProducto from './components/AgregarProducto';
import Navigation from './components/common/Navigation';
import Footer from './components/common/Footer';

function App() {
  return (
    <Router>
      <Navigation/>
      <Switch>
        <Route exact path = '/'>
          <Inicio/>
        </Route>
        <Route exact path = '/productos'>
          <ListarProductos/>
        </Route>
                <Route exact path = '/productos/nuevo-producto'>
          <AgregarProducto/>
        </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
