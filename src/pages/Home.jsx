import React from 'react';
import Hero from '../components/Hero';
import Products from '../components/Products';

const Home = ({ addToCart }) => {
  return (
    <div>
      <Hero />
      <Products  addToCart={addToCart} />
    </div>
  );
};

export default Home;