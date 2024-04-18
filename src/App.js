// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React, { useState } from 'react';
import Cart from './components/Cart';
import Product from './components/Product';

const App = () => {
  const [cart, setCart] = useState([]);
  const products = [
    { id: 1, name: 'Product 1', price: 10},
    { id: 2, name: 'Product 2', price: 20},
    { id: 3, name: 'Product 3', price: 30},
  ];
  
  const addToCart = (productId) => {
    const productToAdd = products.find(product => product.id === productId);
    setCart([...cart, productToAdd]);
  };

  return (
    <div>
      <h1>Simple Shopping Cart</h1>
      <div>
        <h2>Products</h2>
        {products.map(product =>(
          <Product key={product.id} {...product} onAddToCart={addToCart} />
        ))}
      </div>
      <Cart cart={cart} />
    </div>
  );
};

export default App;