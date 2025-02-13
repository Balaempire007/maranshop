// import React from 'react';
// import './Cart.css';

// const Cart = ({ cartItems = [] }) => {
//   return (
//     <div className="cart">
//       <h2>Your Cart</h2>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <ul>
//           {cartItems.map(item => (
//             <li key={item.id}>
//               {item.image && <img src={item.image} alt={item.title} />}
//               <h3>{item.title}</h3>
//               <p>${item.price}</p>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Cart;

import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map(item => (
            <li key={item.id}>
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>${item.price}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
