import React from "react";
import Card from "../../components/CardF/Card.jsx";
import data_products from "../../Assets/Itemdata.js";


import './WomenT.css'; 


function Women() {
    const menProducts = data_products.filter(product => product.category === "women");

    return (
        <div className="women-products">
            {menProducts.map((product, index) => (
                <Card key={index} {...product} />
            ))}
        </div>
    );
}

export default Women;
