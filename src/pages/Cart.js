import React from "react"
import { Context } from "../context"
import CartItem from "../components/CartItem"

function Cart() {
    const {cartItems} = React.useContext(Context)

    const cartElements = cartItems.map(item => <CartItem key={item.id} item={item}/>)

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartElements}
            <p>Total cost: ${cartElements.length * 5.99}</p>
            <div className="order-button">
                <button>Place Order</button>
            </div>
        </main>
    )
}

export default Cart