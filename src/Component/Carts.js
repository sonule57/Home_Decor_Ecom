
import React, { useEffect, useState } from 'react'

const Carts = ({ cart, setCart, handleChange }) => {

    const [price, setPrice] = useState(0);

    const handleRemove = (id) => {
        const arr = cart.filter((item) => item.id !== id);
        setCart(arr);
        handlePrice();
    }

    const handlePrice = () =>{
        let ans = 0;
        cart.map((item) => (ans += item.amount * item.price));
        setPrice(ans);
    };

    useEffect(() =>{
        handlePrice();

    });
  return (
     <>
        <article>

            {Carts.map((item) => (
                <div className='cart_box' key={item.id}>
                    <div className='cart_img'>
                        <img src={item.cover} alt='' />
                        <p>{item.name}</p>
                    </div>

                    <div>
                        <button onClick={() => handleChange(item, 1)}>+</button>
                        <h4>{item.amount}</h4>
                        <button onClick={() => handleChange(item, -1)}>-</button>
                    </div>

                    <div>
                        <span>{item.prices}</span>
                        <button onClick={() => handleRemove(item.id)}>Remove</button>
                    </div>
                </div>
            ))}

            <div className='total'>
                <span>Total Price Of Your Cart</span>
                <span>Rs - {price}</span>
            </div>
        </article>
     
     </>
  )
}



export default Carts;