import React from "react";
import { useCart } from "react-use-cart";

import './CardT.css';

function Card(props) {
    const { addItem } = useCart();

    return (
        <div className="Card-outer">
            <div className="Card-inner">
                <div className="Card-image">
                    <img src={props.image} alt={props.alt} />
                </div>
                <div className="Card-body">
                    <h2>Product: {props.name}</h2>
                    <div className="product-c-c">
                        <p className="original-p">{props.orgcost}</p>
                        <p className="current-p">Price: {props.cost}</p>
                    </div>
                    <button 
                        className="add-to-cart" 
                        onClick={() => addItem({ 
                            id: props.id, 
                            name: props.name, 
                            price: props.cost, 
                            image: props.image,
                            alt: props.alt 
                        })}
                    >
                        ADD TO CART
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Card;
