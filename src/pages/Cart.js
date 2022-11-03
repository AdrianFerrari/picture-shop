import React, {useContext, useState} from 'react'
import {DataContext} from "../contextCustom"
import CartItem from "../components/CartItem"

function Cart() {
    const PLACE_ORDER = "Place Order"
    const [orderStatus, setOrderStatus] = useState(PLACE_ORDER)
    const {cartItems, setCartItems} = useContext(DataContext)
    const cartHTML = cartItems.map((cartItem) => {
        return (
            <CartItem item={cartItem} key={cartItem.id}/>
        )
    })
    let totalCost = (cartItems.length * 5.99).toLocaleString("en-US", {style: "currency", currency: "USD"})

    function ordering() {
        setOrderStatus("Ordering...")
        setTimeout(() => {
            console.log("Order Placed")
            setCartItems([])
            setOrderStatus(PLACE_ORDER)}, 3000)
    }

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartHTML}
            <p className="total-cost">Total: {totalCost}</p>
            <div className="order-button">
                {cartItems.length > 0 ? <button onClick={ordering}>{orderStatus}</button> : <p>You have no items</p>}
            </div>
        </main>
    )
}

export default Cart