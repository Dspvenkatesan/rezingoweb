import React, { Component } from 'react';
import Slider from 'react-slick';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'

import {getTopCollection, getTrendingCollection} from '../../../services'
import {Product4} from '../../../services/script'
import {
    addToCart,
    addToWishlist,
    addToCompare,
    incrementQty,
    decrementQty,
    removeFromCart
} from "../../../actions";
import ProductItem from '../common/special-product-item';
import Commerce from "@chec/commerce.js";
const commerce = new Commerce(
  "pk_25095f6ed4dac89f69f1e4337484555ec6c07ef2fc5d8"
);

class Tranding extends Component {
    constructor(props) {
        super(props); 

        this.state = { 
        products: [],
        };
    }
    componentDidMount() {
        commerce.products.list().then((result) => {
          this.setState({ products: result.data });          
        });
      }


    render (){
        const {items, symbol, addToCart, addToWishlist, addToCompare, incrementQty, decrementQty, removeFromCart, type} = this.props;

        return (
            <div>
                {/*Paragraph*/}
                <section className="section-b-space addtocart_count ratio_square">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="title4">
                                    <h2 className="title-inner4">trending products</h2>
                                    <div className="line"><span></span></div>
                                </div>
                                <Slider {...Product4} className="product-4 product-m no-arrow">
                                { this.state.products.map((product, index ) =>
                                        <div key={index}>
                                        <ProductItem product={product} symbol={symbol}
                                                     onAddToCompareClicked={() => addToCompare(product)}
                                                     onAddToWishlistClicked={() => addToWishlist(product)}
                                                     onAddToCartClicked={() => addToCart(product, 1)} key={index} />
                                        </div>)
                                    }
                                </Slider>
                            </div>
                        </div>
                    </div>
                </section>


                {/* <section className="section-b-space addtocart_count ratio_square">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="title4">
                                    <h2 className="title-inner4">trending products</h2>
                                    <div className="line"><span></span></div>
                                </div>
                                <Slider {...Product4} className="product-4 product-m no-arrow">
                                    { this.state.products.map((product, index ) =>
                                        <div key={index}>
                                            <ProductItem product={product} symbol={symbol}
                                                         onAddToCompareClicked={() => addToCompare(product)}
                                                         onAddToWishlistClicked={() => addToWishlist(product)}
                                                         onAddToCartClicked={() => addToCart(product, 1)}
                                                         onIncrementClicked={() => incrementQty(product, 1)}
                                                         onDecrementClicked={() => decrementQty(product.id)}
                                                         onRemoveFromCart={() => removeFromCart(product)}
                                                         key={index} />
                                        </div>)
                                    }
                                </Slider>
                            </div>
                        </div>
                    </div>
                </section> */}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    items: getTrendingCollection(state.data.products, ownProps.type),
    symbol: state.data.symbol
})

export default connect(mapStateToProps,
    {
        addToCart,
        addToWishlist,
        addToCompare,
        incrementQty,
        decrementQty,
        removeFromCart
    }) (Tranding);