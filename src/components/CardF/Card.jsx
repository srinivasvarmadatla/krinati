import React from "react";

import './CardT.css';


function Card(props) {
    return (
        <div className="Card-outer">
            <div className="Card-inner">
                <div className="Card-image">
                    <img src={props.image} alt={props.alt} />
                </div>
                <div className="Card-body">
                    <h2>Product:{props.name}</h2>
                    <div className="product-c-c">
                        <p className="original-p">{props.orgcost}</p>
                        <p className="current-p">Price: {props.cost}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Card;