import React from "react"
import {Link} from "react-router-dom"
import {Context} from "../context"

function Header() {
    const {cartItems} = React.useContext(Context)
    const cartClass = cartItems.length ? 
    "ri-shopping-cart-fill ri-fw ri-2x" :
    "ri-shopping-cart-line ri-fw ri-2x"

    return (
        <header>
            <Link to="/">
                <h2>PhotoTime</h2>
            </Link>
           
            <Link to="/cart">
                <i className={cartClass}></i>
            </Link>
        </header>
    )
}

export default Header
