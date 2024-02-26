import React from 'react'

const ProductDisplay = (props) => {
    const {product} = props;
  return (
    <div className='productdisplay'>
        <div className="prodisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.img} alt="" />
                <img src={product.img} alt="" />
                <img src={product.img} alt="" />
                <img src={product.img} alt="" />
            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img'src={product.image} alt="" />
            </div>
        </div>
        <div className="displayproduct-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-current-price">
                ${product.current_price}
            </div>
           <div className="productdisplay-right-description">

           </div>
           <div className="productdisplay-right-color">
            <h1>Select Color</h1>
            <div className="productdisplay-right-color">
                <div>Red</div>
                <div>Blue</div>
                <div>Teal</div>
                <div>Yellow</div>
                <div>Gray</div>
                <div>Black</div>
                <div>Pink</div>
                <div>Stainless Steel</div>
            </div>
           </div>
           <button>ADD TO CART</button>
           <p className="productdisplay-right-category"></p>
        </div>
    </div>
  )
}

export default ProductDisplay