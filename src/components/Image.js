import React from "react"

export default function Image({className, img}) {
    return(
        <div className={`${className} image-container`}>
            <img src={img} className="image-grid"/>
        </div>
    )
}