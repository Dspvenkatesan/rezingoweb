import React, { Component } from 'react';
import {Helmet} from 'react-helmet'
import '../../common/index.scss';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import {
    Slider4,
    svgFreeShipping,
    svgservice,
    svgoffer,
    svgpayment} from '../../../services/script'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {connect} from 'react-redux'
import {getBestSeller, getBestSellerProducts, getMensWear, getNewProducts, getWomensWear} from '../../../services/index'
import {addToCart, addToWishlist, addToCompare} from "../../../actions/index";
import ProductItem from '../common/product-item';
import SpecialProducts from "../common/products";

// Import custom components
import Collection from "../../../components/pages/collection"
import LogoBlock from "../common/logo-block"
import BlogSection from "../common/blogsection";
import HeaderThree from "../../common/headers/header-three"
import HeaderFour from "../../common/headers/header-four"
// import FooterOne from "../../common/footers/footer-two";
import TrandingCollection from "../common/collection"
import FooterOne from "../../common/footers/footer-one";
import ThemeSettings from "../../common/theme-settings"
import ProgList from '../../programs/ProgList';
import Commerce from "@chec/commerce.js";
import FooterTwo from '../../common/footers/footer-two';
import FooterFour from "../../common/footers/footer-four";
//import stripHtml from 'string-strip-html';
const commerce = new Commerce(
  "pk_25095f6ed4dac89f69f1e4337484555ec6c07ef2fc5d8"
);

class Home extends Component {
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
        document.getElementById("color").setAttribute("href", `${process.env.PUBLIC_URL}/assets/css/color15.css` );
    }

    render(){

        const {bestSeller, newProducts, featuredProducts, symbol, addToCart, addToWishlist, addToCompare} = this.props

        return (
            <div>
                {/* Header Section */}
                <Helmet>
                    <title>Rezingo</title>
                </Helmet>
                <HeaderFour logoName={'logo/3.png'} />
                <section className="p-0 small-slider">
                    <Slider className="slide-1 home-slider">
                        <div>
                            <div className="home home46">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col">
                                                <div className="slider-contain">
                                                    <div>
                                                    <h2 className='font-color'>Curated health and wellness programs </h2>
                                                    <br></br>
                                                    <p className='font-color'>Designed by independent coaches, practitioners and experts in their fields </p><p className='font-color'>Begin the next step of your health and wellness journey with Rezingo, your single platform for healthy living.</p>
                                                    <Link to='/footer-one' className="btn btn-solid">Read more</Link>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div>
                            <div className="home home45">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col">
                                                <div className="slider-contain">
                                                    <div>
                                                        <h2 className='font-color'>Best health Product</h2>
                                                        <br></br>
                                                        <p className='font-color'>Designed by independent coaches, practitioners and experts in their fields </p><p className='font-color'>Begin the next step of your health and wellness journey with Rezingo, your single platform for healthy living.</p>                                                    
                                                        <Link to='/footer-one' className="btn btn-solid">Read more</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div>
                            <div className="home home47">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col">
                                                <div className="slider-contain">
                                                    <div>
                                                    <h2 className='font-color'>Curated health and wellness programs </h2>
                                                    <br></br>
                                                    <p className='font-color'>Designed by independent coaches, practitioners and experts in their fields </p><p className='font-color'>Begin the next step of your health and wellness journey with Rezingo, your single platform for healthy living.</p>
                                                    <Link to='/footer-one' className="btn btn-solid">Read more</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </Slider>
                </section>
                {/* Header Section End */}

                {/*Logo Block section*/}
                {/* <LogoBlock /> */}
                {/*Logo Block section end*/}

                {/*Features Section*/}

                {/*Service Two*/}
                <div className="container">
                    <section className="service section-b-space p-4 m-5">
                        <div className="row partition4 ">
                            <div className="col-lg-4 col-md-6 service-block1">
                                {/* <div dangerouslySetInnerHTML={{ __html: svgFreeShipping }} /> */}
                                <img src={`/assets/images/logos/45.png`}
                                                 style={{height:"80px",width:"80px"}} className="img-fluid bg-img pb-3" alt="" />
                                <h4>Engage</h4>
                                <p>Engage in as much of our optional survey as possible to browse and select from a variety of recommended health and wellness programs and protocols based on your dynamic health score. </p>
                            </div>
                            <div className="col-lg-4 col-md-6 service-block1 ">
                                {/* <div dangerouslySetInnerHTML={{ __html: svgservice }} /> */}
                                <img src={`/assets/images/logos/55.png`}
                                                 style={{height:"80px",width:"80px"}} className="img-fluid  bg-img pb-3" alt="" />
                                <h4>Build</h4>
                                <p>Build your custom library of programs from the programs page including diverse curated selections for mental health, diet, supplementation, meditation, physical health, and relationships. </p>
                            </div>
                            <div className="col-lg-4 col-md-6 service-block1 border border-0">
                                {/* <div dangerouslySetInnerHTML={{ __html: svgoffer }} /> */}
                                <img src={`/assets/images/logos/65.png`}
                                                 style={{height:"80px",width:"80px"}} className="img-fluid  bg-img pb-3" alt="" />
                                <h4>Grow</h4>
                                <p>Optionally track and share your fitness data, answer daily health prompts, and review your program history in one place. Rezingo grows with you, suggesting new refinements to your wellness. </p>
                            </div>
                            {/* <div className="col-lg-3 col-md-6 service-block1 border border-0">
                                <div dangerouslySetInnerHTML={{ __html: svgpayment }} />
                                <h4>online payment</h4>
                                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. </p>
                            </div> */}
                        </div>
                    </section>
                </div>
                
                {/* <section className="p-0 pet-parallax">
                    <div className="parallax parallax-banner19  text-center p-center">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className="banner-contain">
                                    <h2 className="title-inner1 title1 section-t-space">OUR FEATURES</h2> */}
                                        {/* <p>Could your health use direction? Our wellness programs take the guesswork out of healthful living.</p> */}
                                    {/* </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="pt-0 banner-6 ratio2_1">
                    <div className="container">
                        <div className="row partition3">
                            <div className="col-md-4">
                                <a href="#">
                                    <div className="collection-banner p-left">
                                        <div className="img-part">
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/pets/banner/1.jpg`}
                                                 className="img-fluid blur-up lazyload bg-img" alt="" />
                                        </div>
                                        <div className="contain-banner banner-3">
                                            <div>
                                                <h2>Engage</h2>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-4">
                                <a href="#">
                                    <div className="collection-banner p-right text-right">
                                        <div className="img-part">
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/pets/banner/2.jpg`}
                                                 className="img-fluid blur-up lazyload bg-img" alt="" />
                                        </div>
                                        <div className="contain-banner banner-3">
                                            <div>
                                                <h2>Build</h2>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-4">
                                <a href="#">
                                    <div className="collection-banner p-left">
                                        <div className="img-part">
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/pets/banner/3.jpg`}
                                                 className="img-fluid blur-up lazyload bg-img" alt="" />
                                        </div>
                                        <div className="contain-banner banner-3">
                                            <div>
                                                <h2>Grow</h2>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div> */}
                        {/*</div>
                         <div className="row partition3 banner-top-cls">
                            <div className="col-md-4">
                                <a href="#">
                                    <div className="collection-banner p-right">
                                        <div className="img-part">
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/pets/banner/4.jpg`}
                                                 className="img-fluid blur-up lazyload bg-img" alt="" />
                                        </div>
                                        <div className="contain-banner banner-3">
                                            <div>
                                                <h2>Home</h2>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-4">
                                <a href="#">
                                    <div className="collection-banner p-right text-right">
                                        <div className="img-part">
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/pets/banner/5.jpg`}
                                                 className="img-fluid blur-up lazyload bg-img" alt="" />
                                        </div>
                                        <div className="contain-banner banner-3">
                                            <div>
                                                <h2>cats</h2>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-4">
                                <a href="#">
                                    <div className="collection-banner p-right">
                                        <div className="img-part">
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/pets/banner/6.jpg`}
                                                 className="img-fluid blur-up lazyload bg-img" alt="" />
                                        </div>
                                        <div className="contain-banner banner-3">
                                            <div>
                                                <h2>bowls</h2>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div> */}
                        {/* </div>
                    </div>
                </section> */}
                {/* Feature Section End */}
                {/*Banner Section End*/}



                {/* Who We Are */}
                {/* <section className="p-4 pet-parallax">
                    <div className="text-center p-center">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className="banner-contain">
                                    <h2 className="title-inner1 title-inner1 title1 section-t-space">WHO WE ARE?</h2>
                                        <p>Welcome to Rezingo. We are a health and wellness application unlike any other. We curate health and wellness programs from practitioners all over the world to matching to each of our customer’s individual health and wellness needs. </p>

                                     <div className="pt-4">  <a href="#" className="btn btn-solid black-btn" tabIndex="0">shop now</a> <a href="#" className="btn btn-solid black-btn" tabIndex="0"><span>TRY Levels</span></a>
                                     </div> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}




 

                {/*Program Section*/}
                <div className="title4" style={{marginTop:"150px",marginBottom:"0px"}}>
                                    <h2 className="title-inner4">our top programs</h2>
                                    <div className="line"><span></span></div>
                                </div>
                {/* <h2 className="title-inner1 title-inner1 title1 section-t-space">Our Top Programs</h2> */}

            <Collection />

                {/*Program Section End*/}


                {/*Parallax banner*/}
                {/* <section className="p-0 pet-parallax">
                    <div className="full-banner parallax parallax-banner19 text-center p-center">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className="banner-contain">
                                    <h3>Get <span>30%</span> off on orders of $29 or more. Use Coupon: <span>SHOP30</span></h3>
								<span>Sale available on selected Designer Brands that include Drinks, Food product, Accessories &amp; Watches.</span>
                                        <h3>get upto 70% off</h3>
                                        {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting */}
                                            {/* industry. Lorem Ipsum has been the industry's standard dummy text ever
                                            since the 1500s, when an unknown printer took a galley of type and
                                            scrambled it to make
                                            a type specimen book. </p> */}
                                        {/* <a href="#" className="btn btn-solid black-btn" tabIndex="0">Start Shopping</a> */}
                                    {/* </div>
                                </div>
                            </div>
                        </div>
                        <div className="pet-decor"> */}
                            {/* <img src={`${process.env.PUBLIC_URL}/assets/images/dog.png`} alt="" className="img-fluid blur-up lazyload" /> */}
                        {/* </div>
                    </div>
                </section> */}
                {/*Parallax banner end*/}

                
                {/* Product Section */}
                
               
                <SpecialProducts />

                {/* <TrandingCollection type={'watch'} /> */}

               {/* Product Section End */}


                {/*Product Slider*/}
                {/* <Collection type={'watch'} title="PURCHASE" />
                <Collection type={'furniture'}/>*/}
                {/* Product Slider End  */}
                
                 {/* <section className="section-b-space p-t-0"> */}
                    {/* <div className="container"> */}
                        {/* <Tabs className="theme-tab"> */}
                            {/* <TabList  className="tabs tab-title"> */}
                                {/* <Tab>Recently Arrived</Tab> */}
                                {/* <Tab>Popular Products</Tab> */}
                                {/* <Tab>Recommended For You</Tab> */}
                            {/* </TabList>  */}
                            {/* <TabPanel>  */}
                               {/* <div className="no-slider row"> */}
                               {/* { this.state.products.map((product, index ) => */}
                                        {/* <ProductItem product={product} symbol={symbol} */}
                                                     {/* onAddToCompareClicked={() => addToCompare(product)}
                                                     onAddToWishlistClicked={() => addToWishlist(product)}
                                                     onAddToCartClicked={() => addToCart(product, 1)} key={index} /> )
                                    }
                                </div> 
                                <Collection type={'furniture'}/> */}
                            {/* </TabPanel> 
                            <TabPanel>
                                <div className="no-slider row"> */}
                               {/* { this.state.products.map((product, index ) =>
                                        <ProductItem product={product} symbol={symbol}
                                                     onAddToCompareClicked={() => addToCompare(product)}
                                                     onAddToWishlistClicked={() => addToWishlist(product)}
                                                     onAddToCartClicked={() => addToCart(product, 1)} key={index} /> )
                                    }
                                </div> */}
                                {/* <Collection type={'watch'}/> */}
                            {/* </TabPanel>
                            <TabPanel>
                                <div className=" no-slider row"> */}
                                {/* {this.state.products.map((product, index ) =>
                                        <ProductItem product={product} symbol={symbol}
                                                     onAddToCompareClicked={() => addToCompare(product)}
                                                     onAddToWishlistClicked={() => addToWishlist(product)}
                                                     onAddToCartClicked={() => addToCart(product, 1)} key={index} /> )
                                    } */}
                                {/* </div> */}
                                {/* <Collection type={'pets'}/> */}
                            {/* </TabPanel> */}
                        {/* </Tabs> */}
                    {/* </div> */}
                {/* </section> */}

                {/* Blog Section Section */}
                {/* <div className="container ">
                    <div className="row">
                        <div className="col">
                            <div className="title1 title5">
                                <h4>Gallery</h4>
                                <h2 className="title-inner1">PROGRAMS</h2>
                                <hr role="tournament6" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* <section className="section-b-space p-t-0 ratio2_3">
                    <BlogSection />
                </section> */}
                {/* Blog Section End*/}
                <ThemeSettings/>
                <FooterOne logoName={'logo/1.png'} />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    bestSeller: getBestSellerProducts(state.data.products, ownProps.type),
    newProducts: getNewProducts(state.data.products, ownProps.type),
    featuredProducts: getBestSellerProducts(state.data.products, ownProps.type).reverse(),
    symbol: state.data.symbol
})


export default connect(mapStateToProps, {addToCart, addToWishlist, addToCompare}) (Home);