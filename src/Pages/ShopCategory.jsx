import React, {useContext} from "react";
import './CSS/ShopCategory.css'
import { ShopContext } from "../Context/Shopcontext";

const ShopCategory = (props) => {
    const {all_products} =useContext(ShopContext)
    return (
        <div className="shop-category"> 

        </div>
    )
}

export default ShopCategory