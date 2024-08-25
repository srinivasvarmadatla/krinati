import React from "react";
import { useCart } from "react-use-cart";
import './CartT.css';

function Cart() {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart
    } = useCart();

    if (isEmpty) return <h2>Your cart is empty</h2>;

    return (
        <div className="cart-container">
            <h2>Your Cart</h2>
            <h4>Total Unique Items: {totalUniqueItems}</h4>
            <h4>Total Items: {totalItems}</h4>

            <div className="cart-items">
                {items.map((item, index) => (
                    <div key={index} className="cart-item">
                        <img src={item.image} alt={item.alt} />
                        <div className="item-details">
                            <h4>{item.name}</h4>
                            <p>Price: {item.price}</p>
                            <p>Quantity: {item.quantity}</p>
                        </div>
                        <div className="item-actions">
                            <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                            <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                            <button onClick={() => removeItem(item.id)}>Remove</button>
                        </div>
                    </div>
                ))}
            </div>

            <h3>Total: ${cartTotal}</h3>
            <button onClick={emptyCart}>Clear Cart</button>
        </div>
    );
}

export default Cart;
