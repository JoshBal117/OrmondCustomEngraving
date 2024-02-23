import React, {useContext} from "react";
import './CSS/ShopCategory.css'
import { ShopContext } from "../Context/Shopcontext";
import dropdown_icon from '../Components/Assests/Images/drop_down.png'
import Item from "../Components/item/item";

const ShopCategory = (props) => {
    const {all_products} =useContext(ShopContext);
    return (
        <div className="shop-category"> 
            <img src={props.banner} alt="" />
            <div className="shopcategory-indexSort">
                <p>
                    <span>Showing 1-12</span> out of 72 products
                </p>
                <div className="shopcategory-sort">
                    Sort by <img src={dropdown_icon} alt="" />
                </div>
            </div>
            <div className="shopcategory-products">
                {all_products.map((item,i)=>{
                    if (props.category===item.category) {
                        return <Item key={i} id={item.id}  name={item.name} image={item.img} price={item.price}/>
                    }
                    else{
                        return null;
                    }
                })}
            </div>
        </div>
    )
}

export default ShopCategory