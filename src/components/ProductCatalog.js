import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProductCatalog() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/products') // Update with actual API endpoint
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div>
      <h2>Product Catalog</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name} - ${product.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductCatalog;
