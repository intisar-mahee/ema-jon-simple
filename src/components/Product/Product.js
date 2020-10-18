import React from 'react';

const Product = (props) => {

    return (
        <div>
            <h3>This is Mahee's Product </h3>
            <h4>{props.product.name}</h4>
        </div>
    );
};

export default Product;