import React from "react"
import { Context } from "../context"
import CartItem from "../components/CartItem"

function Cart() {
    const [ordered, setOrdered] = React.useState(false)
    const {cartItems, setCartItems} = React.useContext(Context)
    const cartElements = cartItems.map(item => <CartItem key={item.id} item={item}/>)


    function handleOrder() {
        setOrdered(prev => !prev)       // set ordered to true
        setTimeout(() => {
            setCartItems([])            // clear cartItems
            setOrdered(prev => !prev)           // set ordered back to false
            console.log("Order placed!")   //confirmation
        },3000)
    }

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartElements}
            <p>Total cost: {(cartElements.length * 5.99).toLocaleString("en-US", {style: "currency", currency: "USD"})}</p>
            <div className="order-button">
                {!ordered ?
                    cartItems.length !== 0 ? 
                        <button onClick={handleOrder}>Place Order</button> :
                            <p>You have no items in your cart.</p>:
                        <button disabled>Ordering....</button>
                }
            </div>
        </main>
    )
}

export default Cart