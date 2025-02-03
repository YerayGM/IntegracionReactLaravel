import React, { useEffect, useState } from 'react';

const ProductList = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products', {
          credentials: 'include', // Incluye las credenciales (cookies)
        });

        // Verificar si la respuesta es una redirección
        if (response.redirected) {
          window.location.href = response.url;
          return;
        }

        if (!response.ok) {
          if (response.status === 401) {
            window.location.href = '/login';
          } else {
            throw new Error('Error al obtener los productos');
          }
        }

        const data = await response.json();
        setProductos(data.data);
      } catch (error) {
        console.error('Error al obtener los productos:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Lista de Productos</h1>
      <div className="productos grid grid-cols-1 md:grid-cols-3 gap-6">
        {productos.map(producto => (
          <div key={producto.id} className="producto bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold">{producto.nombre}</h2>
            <img src={producto.imagen} alt={producto.nombre} className="w-full h-48 object-cover mt-2" />
            <p className="text-gray-700 mt-2">{producto.descripcion}</p>
            <p className="text-gray-900 font-bold mt-2">
              <strong>Precio:</strong> ${producto.precio}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
