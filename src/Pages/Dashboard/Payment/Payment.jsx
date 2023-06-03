import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import CheckoutForm from "./CheckOutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import useCart from "../../../Hooks/useCart";

const stripePromise= loadStripe(import.meta.env.VITE_PUBLISHED_KEY)
const Payment = () => {

    const [cart,refetch] = useCart();
    const total = cart.reduce((sum,item) => sum + item.price,0);
    const price = parseFloat(total.toFixed(2));


  return (
    <div className="py-12 overflow-hidden">
      <SectionTitle
        subTitle="Please Process"
        headingTitle="Payment"
      ></SectionTitle>

      <Elements stripe={stripePromise}>
        <CheckoutForm refetch={refetch} cart={cart} price={price}></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
