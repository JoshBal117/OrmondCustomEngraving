import React, {useContext} from "react";
import './CSS/ShopCategory.css'
import { ShopContext } from "../Context/Shopcontext";
import dropdown_icon from '../Components/Assests/Images/drop_down.png'


const ShopCategory = (props) => {
    const {all_products} =useContext(ShopContext)
    return (
        <div className="shop-category"> 
            <img src={props.banner} alt="" />
            <div className="shopcategory-indexSort">
                <p>
                    <span>Showing 1-12</span> out of 49 products
                </p>
                <div className="shopcategory-sort">
                    Sort by <img src={dropdown_icon} alt="" />
                </div>
            </div>
        </div>
    )
}

export default ShopCategory