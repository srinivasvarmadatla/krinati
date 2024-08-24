import React from "react";
import Card from "../../components/CardF/Card.jsx";
import data_products from "../../Assets/Itemdata.js";

import './KidsT.css'; 

function Kids() {
    const kidsProducts = data_products.filter(product => product.category === "kids");

    return (
        <div className="women-products">
            {kidsProducts.map((product, index) => (
                <Card key={index} {...product} />
            ))}
        </div>
    );
}

export default Kids;
