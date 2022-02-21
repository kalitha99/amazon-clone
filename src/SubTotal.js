import React from "react";
import './subtotal.css'
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useHistory } from "react-router-dom";

function SubTotal() {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div>
      <div className="subtotal">
        <CurrencyFormat
          renderText={(value) => (
            <>
              <p>
                Subtotal ({0} items): <strong>{value}</strong>
              </p>
              <small className="subtotal__gift">
                <input type="checkbox" /> This order contains a gift
              </small>
            </>
          )}
          decimalScale={2}
          value={0}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />

        <button>Proceed to Checkout</button>
      </div>
    </div>
  );
}

export default SubTotal;
