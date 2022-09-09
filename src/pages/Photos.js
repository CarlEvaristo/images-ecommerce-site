import React from "react"
import {Context} from "../context"
import Image from "../components/Image"
import {getClass} from "../utils"

function Photos() {
    const {photos} = React.useContext(Context)

    const imageElements = photos.map((image, index) => {
        return <Image 
            img={image} 
            key={image.id} 
            className={getClass(index)} 
        />
    })

    return (
        <main className="photos">
            {imageElements}
        </main>
    )
}

export default Photos