import React from 'react';

const Cart = (props) => {
    const cart=props.cart;
    const total= cart.reduce((total, prd)=> total+prd.price, 0)
    // const totalPrice = cart.reduce((total, prd)=> total + prd.price, 0);
let shipping =0;
if(total>15){
    shipping=0;
}
else if(total>35){
    shipping=0;
}
else if(total>0){
    shipping=12.69
}
const tax= Math.round(total/10);
const grandTotal= Math.round(total+tax+shipping);

    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Ordered: {cart.length}</p>
            <p>Product Price {total}</p>
            <p>Shipping Cost: {shipping}</p>
            <p>Tax: {tax}</p>
            <p>Total Price: {grandTotal}</p>
    
        </div>
    );
};

export default Cart;