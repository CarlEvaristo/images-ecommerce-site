import React from "react"
import {Context} from "../context"
import PropTypes from "prop-types"  

function Image({className, img}) {

    const [hovered, setHovered] = React.useState(false)
    const {toggleFavorite, cartItems, addToCart, removeFromCart} = React.useContext(Context)

    function handleHover() {
        setHovered(prev => !prev)
    }

    const favoriteIcon = img.isFavorite ? 
        <i className={"favorite ri-heart-fill"} onClick={()=>toggleFavorite(img.id)}></i> :
        <i className={"favorite ri-heart-line"} onClick={()=>toggleFavorite(img.id)}></i>

    const cartIcon = cartItems.some(e => e.id === img.id) ? 
        <i className={"cart ri-shopping-cart-fill"} onClick={() => removeFromCart(img.id)}></i> :
        <i className={"cart ri-add-circle-line"} onClick={() => addToCart(img)} ></i>

    return(
        <div    
            className={`${className} image-container`}
            onMouseOver={handleHover}
            onMouseOut={handleHover}>
                {hovered && 
                    <>
                        {favoriteIcon}
                        {cartIcon}
                    </>
                }
                <img 
                    src={img.urls.regular} 
                    className="image-grid" 
                    alt={img.id}
                />
        </div>
    )
}

Image.propTypes = {	
    className: PropTypes.string,
    img: PropTypes.shape({
        isFavorite: PropTypes.bool,
        urls: PropTypes.shape({
            regular: PropTypes.string
        }),
        id: PropTypes.string
    })
}


export default Image