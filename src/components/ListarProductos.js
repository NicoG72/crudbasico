import React, { Fragment } from 'react';
import { Container,ListGroup } from 'react-bootstrap';
import ItemProducto from './ItemProducto';

const ListarProductos = (props) => {
  return (
    <Fragment>
      <Container>
        <h1 className='text-center my-5'>Lista de Productos</h1>
        <ListGroup className='mb-5'>
          {
            props.productos.map((producto)=><ItemProducto producto={producto} key={producto.id}/>)
          }
        </ListGroup>
      </Container>
    </Fragment>
  );
};

export default ListarProductos;