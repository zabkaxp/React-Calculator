import React from "react";

const CurrenciesList = props => {
  const productPrice = props.prices[props.product] * props.amount;
  if (props.amount) {
    return (
      <div>
        {props.currencies.map(currency => (
          <li key={currency.id}>
            {currency.title}
            {(productPrice / currency.ratio).toFixed(2)}
          </li>
        ))}
      </div>
    );
  } else return null;
};
export default CurrenciesList;
