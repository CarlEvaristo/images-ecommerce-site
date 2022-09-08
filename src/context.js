import React, { useEffect } from "react"

const Context = React.createContext()

function ContextProvider(props) {
    const key = "l64Sk4kAeygdViL7Pku6kGTbBV6QMV5X0cWVblAnduI"
    const [photos, setPhotos] = React.useState([])

    useEffect(()=>{
        fetch(`https://api.unsplash.com/search/photos?query=algarve&per_page=20&content_filter=high&client_id=${key}`)
        .then(res => res.json())
        .then(data => {
            data = data.results.map(item => ({...item, isFavorite:false}))
            setPhotos(data)}
        )
    
    },[])

    function toggleFavorite(id) {
        const updatedPhotos = photos.map(photo => {
            if (photo.id === id) {
                return {...photo, isFavorite: !photo.isFavorite}
            } else {
                return photo
            }
        })
        setPhotos(updatedPhotos)
    }

    return (
        <Context.Provider value={{photos, toggleFavorite}}>
            {props.children}
        </Context.Provider>
    )

}
export {ContextProvider, Context}

