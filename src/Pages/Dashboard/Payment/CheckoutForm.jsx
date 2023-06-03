import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import "./CheckoutForm.css"

const CheckoutForm = ({ price,cart,refetch }) => {
  const stripe = useStripe();
  const element = useElements();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();
  const [processing,setProcessing] = useState(false)
  const [transactionId,setTransactionId] = useState("");

  useEffect(() => {
    if (price > 0) {
      axiosSecure.post("/create-payment-intent", { price })
      .then((res) => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [price,axiosSecure]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !element) {
      return;
    }

    const card = element.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error.message);
    } else {
      setCardError("");
      // console.log("[PaymentMethod]", paymentMethod);
    }

    setProcessing(true)

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "Anonymous",
            email: user?.email || "Anonymous",
          },
        },
      });
      if(confirmError){
        setCardError(confirmError.message)
      }
    setProcessing(false)

      if(paymentIntent?.status === 'succeeded'){
        setTransactionId("")
        const transactionId = paymentIntent.id;
        setTransactionId(transactionId)
        const payment = {
            email: user?.email,
            transactionId: paymentIntent.id,
            price,
            quantity: cart.length,
            itemNames: cart.map(item => item.name) ,
            cartItems: cart.map(item => item._id),
            menuItems:cart.map(item => item.menuItemId),
            status: 'service pending'
        }
          axiosSecure.post("/payments",payment)
          .then(res => {
            if(res.data.result.insertedId){
                refetch()
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Payment Success',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
          })
      }
 
  };
  return (
    <div className="">
      <form className="max-w-full mx-auto md:w-1/2 " onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <div className="text-center">
          <button
            className="btn mt-5 btn-wide btn-primary"
            type="submit"
            disabled={!stripe || !clientSecret || processing}
          >
            Pay
          </button>
        </div>
      </form>
      <p className="text-center mt-10 text-red-600">{cardError}</p>
      {
        transactionId && <p className="text-center mt-10 text-green-600">Transaction Success: Here Transaction Id: {transactionId}</p>
      }
    </div>
  );
};

export default CheckoutForm;
