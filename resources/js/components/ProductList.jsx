import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    axios.get('/api/products')
      .then(response => {
        setProductos(response.data.data);
      })
      .catch(error => {
        console.error('Error al obtener los productos:', error);
      });
  }, []);

  return (
    <div>
      <h1>Lista de Productos</h1>
      <div className="productos">
        {productos.map(producto => (
          <div key={producto.id} className="producto">
            <h2>{producto.nombre}</h2>
            <img src={producto.imagen} alt={producto.nombre} />
            <p>{producto.descripcion}</p>
            <p><strong>Precio:</strong> ${producto.precio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
