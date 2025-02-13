// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './Products.css';

// const Products = () => {
//   const [products, setProducts] = useState([]);
//   const [cart, setCart] = useState([]);

//   useEffect(() => {
//     axios.get('https://fakestoreapi.com/products')
//       .then(response => setProducts(response.data))
//       .catch(error => console.error(error));
//   }, []);

//   const addToCart = (product) => {
//     setCart([...cart, product]);
//     alert(`${product.title} added to cart!`);
//   };

//   return (
//     <div className="products">
//       {products.map(product => (
//         <div key={product.id} className="product-card">
//           <img src={product.image} alt={product.title} />
//           <h3>{product.title}</h3>
//           <p>${product.price}</p>
//           <button onClick={() => addToCart(product)}>Add to Cart</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Products;
//----------------------------------------
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Products.css';

const Products = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="products">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
          <p>${product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Products;