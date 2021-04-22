import React from 'react';
import { Container, Form } from 'react-bootstrap';

const EditarProducto = () => {
  return (
    <Container>
      <Form className='my-5'>
        <h1 className ='text-center my-5'>Editar Prodcuto</h1>
        <Form.Group>
          <Form.Label>Nombre de Producto*</Form.Label>
          <Form.Control type='text' placeholder = 'Te'></Form.Control>
        </Form.Group>
                <Form.Group>
          <Form.Label>Precio*</Form.Label>
          <Form.Control type='number'></Form.Control>
        </Form.Group>
        <h3 className='text-center my-2'>Categoria</h3>
        <div className='text-center'>
          <Form.Check name='categoria' inline type = 'radio' label = 'Bebida Caliente'></Form.Check>
          <Form.Check name='categoria' inline type = 'radio' label = 'Bebida Fria'></Form.Check>
          <Form.Check name='categoria' inline type = 'radio' label = 'Dulce'></Form.Check>
          <Form.Check name='categoria' inline type = 'radio' label = 'Salado'></Form.Check>
        </div>
      </Form>
    </Container>
  );
};

export default EditarProducto;