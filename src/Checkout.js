import React from "react";
import "./checkout.css";
import SubTotal from "./SubTotal";

function Checkout({ id, image, title, price, rating, hideButton }) {
  return (
    <div>
       <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />

        <div>
          <h3>Hello, </h3>
          <h2 className="checkout__title">Your shopping Basket</h2>

          {/*basket.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))*/}

        </div>
      </div>

      <div className="checkout__right">
        <SubTotal />
      </div>
    </div>

    </div>
  );
}

export default Checkout;
