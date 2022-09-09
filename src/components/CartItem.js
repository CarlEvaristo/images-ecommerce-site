import React from "react"
import { Context } from "../context"

function CartItem({item}) {
    const { removeFromCart } = React.useContext(Context)
    const [ trashFill, setTrashFill ] = React.useState(false)
    
    function handleTrash() {
        setTrashFill(prev => !prev)
    }
    
    const trashClass = trashFill ? "ri-delete-bin-fill" : "ri-delete-bin-line"

    return (
        <div className="cart-item">
            <img src={item.urls.thumb} width="130px" alt={item.alt_description} />
            <p>$5.99</p>
            <i onMouseEnter={handleTrash} onMouseLeave={handleTrash} className={trashClass} onClick={ () => removeFromCart(item.id) }></i>
        </div>
    )
}



export default CartItem