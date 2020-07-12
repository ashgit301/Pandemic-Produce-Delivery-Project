import React from "react";
import StripeCheckout from "../../components/stripe-button/stripe-button";
import CheckoutItem from "../../components/checkout-item/checkout-item";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartItemsTotalPrice,
} from "../../redux/cart/cartSelector";
import "./cart-checkout.scss";

const CheckoutPage = ({ cartItems, total }) => {
  console.log(cartItems);
  return (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className='total'>TOTAL: ${total}</div>
      <StripeCheckout price={total}></StripeCheckout>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartItemsTotalPrice,
});

export default connect(mapStateToProps)(CheckoutPage);
