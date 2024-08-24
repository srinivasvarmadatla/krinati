import React from "react";
import Card from "../../components/CardF/Card.jsx";
import data_products from "../../Assets/Itemdata.js";
import './ShopT.css';



function Shop() {
    return (
        <div className="products">
            {data_products.map((product, index) => (
                <Card key={index} {...product} />
            ))}
        </div>
    );
}

export default Shop;
