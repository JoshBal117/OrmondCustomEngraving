import React, {useContext} from "react";
import './CSS/ShopCategory.css'
import { ShopContext } from "../Context/Shopcontext";
import dropdown_icon from '../Components/Assests/Images/drop_down.png'
import Item from "../Components/item/item";

const ShopCategory = (props) => {
    const {all_product} =useContext(ShopContext);
    return (
        <div className="shop-category"> 
            <img src={props.banner} alt="" />
            <div className="shopcategory-indexSort">
                <p>
                    <span>Showing 1-12</span> out of products
                </p>
                <div className="shopcategory-sort">
                    Sort by <img src={dropdown_icon} alt="" />
                </div>
            </div>
            <div className="shopcategory-products">
                {all_product.map((item,i)=>{
                    if (props.category===item.category) {
                        return <Item key={i} id={item.id}  name={item.name} image={item.image} current_price={item.current_price}/>
                    }
                    else{
                        return null;
                    }
                })}
            </div>
            <div className="shopcategory-loadmore">
                Explore more
            </div>
        </div>
    )
}

export default ShopCategory