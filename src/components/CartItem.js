import React from "react"
import { Context } from "../context"

export default function CartItem({item}) {
    const { removeFromCart } = React.useContext(Context)

    return (
        <div className="cart-item">
            <img src={item.urls.thumb} width="130px" alt={item.alt_description} />
            <p>$5.99</p>
            <i className="ri-delete-bin-line" onClick={ () => removeFromCart(item.id) }></i>
        </div>
    )
}

