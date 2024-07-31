// components/CheckoutButton.js
'use client'
import React from 'react';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const CheckoutButton = ({product}) => {
    //console.log(product);
  const handleClick = async () => {
    const stripe = await stripePromise;

    const response = await axios.post('/api/create-checkout-session', {
    product :product
    });

    const session = await response.data;

    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      // Handle any errors that occur during the redirection
      console.error(result.error.message);
    }
  };

  return (
    <button  className='btn bg-red-500 text-white rounded-sm m-10 ' onClick={handleClick}>
      Order Now 
    </button>
  );
};

export default CheckoutButton;
