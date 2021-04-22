import React, { useState }from 'react';
import { Container, Form, Button, Alert} from 'react-bootstrap';
import Swal from 'sweetalert2';

const AgregarProducto = () => {

const URL = process.env.REACT_APP_API_URL;
const [nombreProducto, setNombreProducto] = useState('');
const [precioProducto, setPrecioProducto] = useState(0);
const [categoria, setCategoria] = useState('');
const [error, setError] = useState(false);


 const cambiarCategoria = (e)=>{
setCategoria(e.target.value)
    }

    const handleSubmit = async (e)=>{
      e.preventDefault();
      //validacion 
      if(nombreProducto.trim() === '' || (precioProducto <= 0) || categoria === ''){
        setError(true);
      }else{
        setError(false);

        const producto  = { 
          nombreProducto,
          precioProducto,
          categoria
        }
        console.log(producto)
        try{
          const  configuracion ={
             method: "POST",
             headers: {
               "Content-Type":"application/json"
             },
             body: JSON.stringify(producto)
          }
          const respuesta = await fetch(URL, configuracion);
          console.log(respuesta);
          if(respuesta.status === 201){
            Swal.fire(
  'Producto Agregado!',
  'El producto se agrego correctamente',
  'success'
)
          }
        }catch(err){
          console.log(err);

        }
      }
    }

  return (
    <Container>
      <Form className='my-5' onSubmit ={handleSubmit}>
        <h1 className ='text-center my-5'>Agregar nuevo producto</h1>
        <Form.Group>
          <Form.Label>Nombre de Producto*</Form.Label>
          <Form.Control type='text' placeholder = 'Te' onChange={(e)=>setNombreProducto(e.target.value)}></Form.Control>
        </Form.Group>
                <Form.Group>
          <Form.Label>Precio*</Form.Label>
          <Form.Control type='number' onChange={(e)=>setPrecioProducto(parseInt(e.target.value))}></Form.Control>
        </Form.Group>
        <h3 className='text-center my-2'>Categoria</h3>
        <div className='text-center'>
          <Form.Check value= 'bebidaCaliente' onChange={cambiarCategoria} name='categoria' inline type = 'radio' label = 'Bebida Caliente'></Form.Check>
          <Form.Check value= 'bebidaFria' onChange={cambiarCategoria} name='categoria' inline type = 'radio' label = 'Bebida Fria'></Form.Check>
          <Form.Check value= 'dulce' onChange={cambiarCategoria} name='categoria' inline type = 'radio' label = 'Dulce'></Form.Check>
          <Form.Check value= 'salado' onChange={cambiarCategoria} name='categoria' inline type = 'radio' label = 'Salado'></Form.Check>
        </div>
        <Button variant='success' type='submit' className='my-3 w-100'>Guardar</Button>
        {
          (error)?(<Alert variant='warning' > Todos los campos son obligatorios </Alert>):(null)
        }
      </Form>
    </Container>
  );
};

export default AgregarProducto;