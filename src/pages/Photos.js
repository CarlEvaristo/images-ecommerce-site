import React from "react"
import {Context} from "../context"
import Image from "../components/Image"
import {getClass} from "../utils"

function Photos() {
    const context = React.useContext(Context)
    const imageElements = context.map((image,index) => (
        <Image 
            img={image.urls.regular} 
            key={image.id} 
            alt={`${image.id}`}
            className={getClass(index)}  
        />
    ))

    return (
        <main className="photos">
            {imageElements}
        </main>
    )
}

export default Photos