import React, {useContext} from "react"
import PropTypes from "prop-types"
import {DataContext} from "../contextCustom"
import useHover from "../hooks/useHover"

function CartItem({item}) {
    //const [Hover, setHover] = useState(false)
    const {addOrRemoveFromCart} = useContext(DataContext)
    const [hover, ref] = useHover()
    return (
        <div className="cart-item">
            <i 
                onClick={() => addOrRemoveFromCart(item)} 
                className={hover ? "ri-delete-bin-fill" : "ri-delete-bin-line"}
                ref = {ref}
                ></i>
            <img src={item.url} width="130px" />
            <p>$5.99</p>
        </div>
    )
}

CartItem.propTypes = {
    item: PropTypes.shape({
        url: PropTypes.string
    })
}

export default CartItem

/*Filled trash icon to use when hovering:
<i className="ri-delete-bin-fill"></i>

Empty trash icon to use when NOT hovering:
<i className="ri-delete-bin-line"></i>*/