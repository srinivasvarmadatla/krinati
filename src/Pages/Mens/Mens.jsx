import React from "react";
import Card from "../../components/CardF/Card.jsx";

import data_products from "../../Assets/Itemdata.js";

import './MensT.css'; 



function Mens() {
    const menProducts = data_products.filter(product => product.category === "men");

    return (
        <div className="mens-products">
            {menProducts.map((product, index) => (
                <Card key={index} {...product} />
            ))}
        </div>
    );
}

export default Mens;
