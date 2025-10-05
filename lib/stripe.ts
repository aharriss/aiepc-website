import { loadStripe, Stripe } from '@stripe/stripe-js';

let stripePromise: Promise<Stripe | null>;

export const getStripe = () => {
  if (!stripePromise) {
    // Using the publishable key from environment or a placeholder
    const publishableKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || 'pk_test_placeholder';
    stripePromise = loadStripe(publishableKey);
  }
  return stripePromise;
};
