import React from 'react';

const Product = ({ id, name, price, onAddToCart}) => {
    return (
        <div>
            <h3>{name}</h3>
            <p>${price}</p>
            <button> onClick={() => onAddToCart(id)}Add to Cart</button>
        </div>
    );
};

export default Product;