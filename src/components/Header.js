import { Link } from "react-router-dom"
import React, {useContext} from 'react'
import {DataContext} from "../contextCustom"

function Header() {
    const {cartItems} = useContext(DataContext)
    return (
        <header className="header">
            <Link to="/">Pic Some</Link>
            <Link to="/cart" ><i className={cartItems.length > 0 ? "ri-shopping-cart-fill ri-fw ri-2x" : "ri-shopping-cart-line ri-fw ri-2x"}></i></Link>
        </header>
    )
}

export default Header