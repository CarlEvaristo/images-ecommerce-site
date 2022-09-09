import React, { useEffect } from "react"

const Context = React.createContext()

function ContextProvider(props) {
    const key = process.env.REACT_APP_API_KEY
    const [photos, setPhotos] = React.useState([])
    const [cartItems, setCartItems] = React.useState([])

    useEffect(()=>{
        fetch(`https://api.unsplash.com/search/photos?query=algarve&per_page=20&content_filter=high&client_id=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(data => {
            data = data.results.map(item => ({...item, isFavorite:false}))
            setPhotos(data)}
        )
    },[])


    console.log(cartItems)


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

    function addToCart(img){
        setCartItems(prevCartItems => ([...prevCartItems, img]))
    }

    function removeFromCart(id){
        setCartItems(prevCartItems => prevCartItems.filter(item => id !== item.id) )
    }


    return (
        <Context.Provider value={{photos, toggleFavorite, cartItems, setCartItems, addToCart, removeFromCart}}>
            {props.children}
        </Context.Provider>
    )

}
export {ContextProvider, Context}

