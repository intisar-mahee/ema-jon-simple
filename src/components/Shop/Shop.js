import React from 'react';
import fakeData from '../../fakeData';
import { useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';


const Shop = () => {
    
    const first10 = fakeData.slice(0,10);
    const [products, setProducts]=useState(first10);
    return (
        <div className="shopContainer">

            <div className="productContainer">
                
                {
                    products.map(pd=> <Product product={pd}></Product>)
                }
                

            </div>

            <h1>Order Summary</h1>
            
            
            
        </div>
    );
};

export default Shop;