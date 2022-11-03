import React, { createContext, useState, useEffect } from "react"
import PropTypes from 'prop-types';

export const DataContext = createContext()

export function Context(props) {
    const [photos, setPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json')
        .then((response) => response.json())
        .then((data) => setPhotos(data));
    }, [])

   
    function addOrRemoveFromCart(itemParam) {
        if(cartItems.some(item => item.id === itemParam.id)){
            setCartItems(preItems => preItems.filter(cartItem => cartItem.id !== itemParam.id))
        }else{
            setCartItems(prevItems => [...prevItems, itemParam])
        }
    }

    function favoriteToggle(id) {
        const updatedArray = photos.map(photo => {
            if(photo.id === id) {
                return {
                    ...photo,
                    isFavorite: !photo.isFavorite
                }              
            }else return photo
                    
            
        })
        setPhotos(updatedArray)
    }

    return (
        <DataContext.Provider value={{photos, favoriteToggle, cartItems, addOrRemoveFromCart, setCartItems}}>
            {props.children}
        </DataContext.Provider>
    )
}

Context.propTypes = {
    children: PropTypes.node
}