/*** 
 * strip payment
 * 1. install ---  npm install @stripe/react-stripe-js @stripe/stripe-js
 * 2. create a CheckoutForm with Card element (card element contains: card number, expiration data, cvs, zip code)
 * 3. create account on stipe and get the publishable key pk
 * 4. get card information
 * 5. create a payment method
 * 6. use test card to test payment 
 * 
 * 7. on the server side stripe > docs > payment > online payment > quickStart
 * 8. install stipe : npm install --save stripe
 * 9. create a payment intent api with payment method types: ['card']
 * 10. make sure you provide amount in cents (multiply price with 100)
 *11. call payment intent api to get client secret and store it in a state 
 *  12. use confirmCardPayment pai with client secret card info
 * 13. display confirm card error
 * 14. display confirm card and success
 * */ 