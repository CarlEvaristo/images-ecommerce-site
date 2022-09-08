import React, { useEffect } from "react"

const Context = React.createContext()

function ContextProvider(props) {
    const key = "l64Sk4kAeygdViL7Pku6kGTbBV6QMV5X0cWVblAnduI"
    const [photos, setPhotos] = React.useState([])

    useEffect(()=>{
        fetch(`https://api.unsplash.com/search/photos?query=bahamas&per_page=20&content_filter=high&client_id=${key}`)
        .then(res => res.json())
        .then(data => {
            setPhotos(data.results)}
        )
    
    },[])

    return (
        <Context.Provider value={photos}>
            {props.children}
        </Context.Provider>
    )

}
export {ContextProvider, Context}