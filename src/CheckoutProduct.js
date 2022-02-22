import React from "react";
import './checkoutPrroducts.css'
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, title, price, rating }) {
  const [{basket},dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type:"REMOVE_FROM_BASKET",
      id:id
    })
  }

  return (
    <div className="CheckoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>🌟</p>
            ))}
        </p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <button onClick={removeFromBasket} >Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
