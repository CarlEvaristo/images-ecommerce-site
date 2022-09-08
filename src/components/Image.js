import React from "react"
import {Context} from "../context"

export default function Image({className, img, alt}) {

    const [hovered, setHovered] = React.useState(false)
    const {toggleFavorite} = React.useContext(Context)

    function handleHover() {
        setHovered(prev => !prev)
    }

    return(
        <div    
            className={`${className} image-container`}
            onMouseOver={handleHover}
            onMouseOut={handleHover}>
                {hovered && 
                    <>
                        <i className={`favorite ${img.isFavorite ? "ri-heart-fill" : "ri-heart-line" }`} onClick={() => toggleFavorite(img.id)}></i>
                        <i className="ri-add-circle-line cart"></i>
                    </>
                }
                <img 
                    src={img.urls.regular} 
                    className="image-grid" 
                    alt={alt}
                />
        </div>
    )
}


// # Challenge

// Add ability to toggle an image's `isFavorited` property by clicking the heart icon (filled heart doesn't need to display on the image yet)

// 1. Add a toggleFavorite method to context. It should take an `id` parameter and update the array of allPhotos by flipping the `isFavorited` property of the photo with the matching `id`
//     a. Have this function also console.log something so we know it's running correctly
//     b. Don't try to modify the individual image object only. Make sure to provide a whole new array to context with the one item with the matching `id` being changed.
// 2. Make it so clicking the heart icon on any given image runs this method