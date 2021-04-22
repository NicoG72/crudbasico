import React from 'react';
import {ListGroup,Button,Badge } from 'react-bootstrap';

const ItemProducto = () => {
  return (
<ListGroup.Item className= 'd-flex justify-content-between'>
  <p>nombre del producto <Badge variant="secondary">$200</Badge></p>
  <div className="mr-3">
  <Button variant= 'warning'>Editar</Button>
  <Button variant= 'danger'>Borrar</Button>
  </div>
</ListGroup.Item>
  );
};

export default ItemProducto;