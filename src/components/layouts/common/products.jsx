import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {connect} from 'react-redux'
import Slider from 'react-slick';
import {Link} from 'react-router-dom';

import {getTopCollection, getTrendingCollection} from '../../../services'
import {getBestSeller, getMensWear, getWomensWear} from '../../../services/index'
import ProductItem from './product-item';
import {Product4} from '../../../services/script'
import {
    addToCart,
    addToWishlist,
    addToCompare,
    incrementQty,
    decrementQty,
    removeFromCart
} from "../../../actions";
import Commerce from "@chec/commerce.js";
//import stripHtml from 'string-strip-html';
const commerce = new Commerce(
  "pk_25095f6ed4dac89f69f1e4337484555ec6c07ef2fc5d8"
);

class SpecialProducts extends Component {
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

        const { bestSeller,mensWear,womensWear, symbol, addToCart, addToWishlist, addToCompare, type, incrementQty, decrementQty, removeFromCart} = this.props;
        
        // var properties;
        // if(type === 'kids'){
        //     properties = Product5
        // }else{
        //     properties = Product4
        // }

        return (
            <div>
                
                <section className="section-b-space addtocart_count ratio_square">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="title4">
                                    <h2 className="title-inner4">our products</h2>
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
                </section>
                
                
                
                
                
                
                
                
                
                
                
                
                
                {/* <div className="title1 section-t-space"> */}
                    {/* <h4>exclusive products</h4> */}
                    {/* <h2 className="title-inner1">Products</h2> */}
                {/* </div> */}
                {/* <section className="section-b-space p-t-0"> */}
                    {/* <div className="container"> */}
                        {/* <Tabs className="theme-tab"> */}
                             {/* <TabList className="tabs tab-title">
                                <Tab>New Products</Tab>
                                <Tab>Health Product</Tab>
                                <Tab>Gym Product</Tab>
                            </TabList>  */}



                {/* <section className="section-b-space p-t-0">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <Slider {...properties} className="product-4 product-m no-arrow">
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
                </section> */}



                            {/* <TabPanel>
                                <div className="no-slider row"> */}
                                    {/* { bestSeller.map((product, index ) => */}
                                    {/* { this.state.products.map((product, index ) =>
                                        <ProductItem product={product} symbol={symbol}
                                                     onAddToCompareClicked={() => addToCompare(product)}
                                                     onAddToWishlistClicked={() => addToWishlist(product)}
                                                     onAddToCartClicked={() => addToCart(product, 1)} key={index} /> )
                                    }
                                </div>
                            </TabPanel> */}
                            {/* <TabPanel>
                                <div className="no-slider row">
                                    { this.state.products.map((product, index ) =>
                                        <ProductItem product={product} symbol={symbol}
                                                     onAddToCompareClicked={() => addToCompare(product)}
                                                     onAddToWishlistClicked={() => addToWishlist(product)}
                                                     onAddToCartClicked={() => addToCart(product, 1)} key={index} /> )
                                    }
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className=" no-slider row">
                                    { this.state.products.map((product, index ) =>
                                        <ProductItem product={product} symbol={symbol}
                                                     onAddToCompareClicked={() => addToCompare(product)}
                                                     onAddToWishlistClicked={() => addToWishlist(product)}
                                                     onAddToCartClicked={() => addToCart(product, 1)} key={index} /> )
                                    }
                                </div>
                            </TabPanel> */}
                        {/* 
                    </div>
                </section> */}
                {/* </Tabs> */}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    bestSeller: getBestSeller(state.data.products),
    mensWear: getMensWear(state.data.products),
    womensWear: getWomensWear(state.data.products),
    items: getTrendingCollection(state.data.products, ownProps.type),
    symbol: state.data.symbol
})

export default connect(mapStateToProps, {addToCart, addToWishlist, addToCompare,incrementQty,
    decrementQty,
    removeFromCart}) (SpecialProducts);