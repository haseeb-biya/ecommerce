import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51J8JJtSFP4WBo0fPokeirRKqibAO1hNAvltQNmG2WR5Z1spVHBt6AGW1wvpQ2mhftuSyIt7HvIFzguJDVXx8Jfnd00feTWzKYQ"
    
    const onToken = token => {
        console.log(token)
    }
    return (
        <StripeCheckout
            label='Pay Now'
            name='Ecomm Clothing'
            billingAddress
            shippingAddress 
            image='https://svgshare.com/i/CUz.svg'
            description={`Your Total is ${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}
export default StripeCheckoutButton;
