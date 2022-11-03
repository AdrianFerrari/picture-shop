import {getClass} from "../util/getClass"
import React, {useContext} from 'react'
import {DataContext} from "../contextCustom"
import PropTypes from 'prop-types'
import useHover from "../hooks/useHover"

function Image(props) {
    const {favoriteToggle, addOrRemoveFromCart, cartItems} = useContext(DataContext)
    //const [Hover, setHover] = useState(false)
    const [hover, ref] = useHover()

    const isInCart = cartItems.some(item => item.id === props.photo.id)

    const heartIcon = <i onClick={() => favoriteToggle(props.photo.id)} 
                         className={props.photo.isFavorite ? "ri-heart-fill favorite" : "ri-heart-line favorite"}></i>

    const cartIcon = <i onClick={() => addOrRemoveFromCart(props.photo)} 
                        className={isInCart ? "ri-shopping-cart-fill cart" : "ri-add-circle-line cart"}></i>
    
    return (
        <div ref = {ref}
             className={`${getClass(props.index)} image-container`}
        >
            {(hover || props.photo.isFavorite ) && heartIcon}
            {hover && cartIcon}
            <img className="image-grid" src={props.photo.url} alt=""/>
        </div>
    )
}

Image.propTypes = {
    className: PropTypes.string,
    photo: PropTypes.shape ({
        isFavorite: PropTypes.bool,
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
    }),
    index: PropTypes.number
}

export default Image