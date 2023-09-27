import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_PUBLISHKEY);


export default function useStripe(){
    const handlePayment = async () => {
        const lineItems = [
          {  quantity: 2, price: `price_1NuuBwSBjLBOskIz0a5ZUhtO`},
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
    
    
    return handlePayment

}

 