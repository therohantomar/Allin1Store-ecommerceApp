import React from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_PUBLISHKEY);

const handlePayment = async () => {
    const lineItems = [
      { name: 'Product 1', quantity: 2, price: 10, currency: 'USD' },
      { name: 'Product 2', quantity: 1, price: 15, currency: 'USD' },
      // Add more line items as needed
    ];
  
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      lineItems,
      mode: 'payment',
      successUrl: `${window.location.origin}/success`,
      cancelUrl: `${window.location.origin}/cancel`,
    });
  
    if (error) {
      console.log('Payment failed:', error);
    }
  };