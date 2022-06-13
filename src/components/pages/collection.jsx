import React, {Component} from 'react';
import Breadcrumb from "../common/breadcrumb";
import Slider from 'react-slick';
import {
    Slider4,
    svgFreeShipping,
    svgservice,
    svgoffer,
    svgpayment} from '../../services/script'

class Collection extends Component {

    constructor(props) {
        super(props)   
      this.state = {
            records: []
        }
       // this.onviewdetails = this.onviewdetails.bind(this);
    }

    

    componentDidMount() {
		//let programid =1;
		 let programid = JSON.parse(localStorage.getItem("programId"));
        // console.log(programid);

		fetch(`https://rez-castle-app-prd-eastus.azurewebsites.net/api/practice/${programid}`)
            .then(response => response.json())
            .then(items => {
                this.setState({
                    items: items
                })
            })

        fetch('https://rez-castle-app-prd-eastus.azurewebsites.net/api/program/')
            .then(response => response.json())
            .then(records => {
                this.setState({
                    records: records
                })
            })
            .catch(error => console.log(error))
    }

	handleClick({currentTarget}) {    
        console.log(currentTarget.value) // e.currentTarget.value would be equivalent
        localStorage.setItem('programId',currentTarget.value);
        // return currentTarget.value;
      }
   

    render (){


        return (
            <div>
                {/* <Breadcrumb title={'Collection'}/> */}
                
                




                {/*category wrapper*/}
                <section className="section-b-space ratio_portrait">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                           
                                <Slider {...Slider4} className="slide-4 category-m no-arrow"  >
                                {this.state.records.map((item, i) => (
                                    <div  key={i} style={{height:""}}>
                                        <div className="category-wrapper">
                                            <div>
                                                <div>
                                                    <img src={item.logo}
                                                         className="img-fluid blur-up lazyload bg-img" alt={item.title} />
                                                </div>
                                                <h4>{item.title}</h4>
                                                <p>{item.descriptions}</p>
                                                {/* <ul className="category-link">
                                                    <li><a href="#">d1 milano</a></li>
                                                    <li><a href="#">damaskeening</a></li>
                                                    <li><a href="#">diving watch</a></li>
                                                    <li><a href="#">dollar watch</a></li>
                                                </ul> */}
                                                <a href="#" className="btn btn-outline">view more</a></div>
                                        </div>
                                    </div>
                                       ))}
                                    </Slider>
                         
                            </div>
                        </div>
                    </div>
                </section>
                                    {/* <div>
                                        <div className="category-wrapper">
                                            <div>
                                                <div>
                                                    <img src={`${process.env.PUBLIC_URL}/assets/images/watch/cat2.png`}
                                                         className="img-fluid blur-up lazyload bg-img" alt="" />
                                                </div>
                                                <h4>calculator watch</h4>
                                                <ul className="category-link">
                                                    <li><a href="#">Shock-resistant watch</a></li>
                                                    <li><a href="#">Skeleton watch</a></li>
                                                    <li><a href="#">Slow watch</a></li>
                                                    <li><a href="#">Solar-powered watch</a></li>
                                                </ul>
                                                <a href="#" className="btn btn-outline">view more</a></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="category-wrapper">
                                            <div>
                                                <div>
                                                    <img src={`${process.env.PUBLIC_URL}/assets/images/watch/cat3.png`}
                                                         className="img-fluid blur-up lazyload bg-img" alt="" />
                                                </div>
                                                <h4>Antimagnetic watch</h4>
                                                <ul className="category-link">
                                                    <li><a href="#">Watchmaking conglomerates</a></li>
                                                    <li><a href="#">Breitling SA</a></li>
                                                    <li><a href="#">Casio watches</a></li>
                                                    <li><a href="#">Citizen Watch</a></li>
                                                </ul>
                                                <a href="#" className="btn btn-outline">view more</a></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="category-wrapper">
                                            <div>
                                                <div>
                                                    <img src={`${process.env.PUBLIC_URL}/assets/images/watch/cat2.png`}
                                                         className="img-fluid blur-up lazyload bg-img" alt="" />
                                                </div>
                                                <h4>History of watches</h4>
                                                <ul className="category-link">
                                                    <li><a href="#">Manufacture d'horlogerie</a></li>
                                                    <li><a href="#">Mechanical watch</a></li>
                                                    <li><a href="#">Microbrand watches</a></li>
                                                    <li><a href="#">MIL-W-46374</a></li>
                                                </ul>
                                                <a href="#" className="btn btn-outline">view more</a></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="category-wrapper">
                                            <div>
                                                <div>
                                                    <img src={`${process.env.PUBLIC_URL}/assets/images/watch/cat1.png`}
                                                         className="img-fluid blur-up lazyload bg-img" alt="" />
                                                </div>
                                                <h4>watch models</h4>
                                                <ul className="category-link">
                                                    <li><a href="#">d1 milano</a></li>
                                                    <li><a href="#">damaskeening</a></li>
                                                    <li><a href="#">diving watch</a></li>
                                                    <li><a href="#">dollar watch</a></li>
                                                </ul>
                                                <a href="#" className="btn btn-outline">view more</a></div>
                                        </div>
                                    </div> */}
                                
                {/*category wrapper end*/}







                {/*Collection section*/}
                {/* <section className="collection section-b-space">
                    <div className="container">
                        <div className="row ">
                        {this.state.records.map((item, i) => (

                            <div className="col-lg-3 col-md-6"  key={i}>
                                <div className="collection-block">
                                    <img src={item.logo} className="img-fluid" alt={item.title} style={{height:"200px",width:"250px"}} />
                                        <div className="collection-content">
                                            <h4>(20 products)</h4>
                                            <h3>{item.title}</h3>
                                            <p>{item.descriptions}</p>
                                            <a href="category-page.html" className="btn btn-outline">shop now !</a>
                                        </div>
                                </div>
                            </div>


))}  */}

                            {/* <div className="col-lg-3 col-md-6">
                                <div className="collection-block">
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/collection/3.jpg`} className="img-fluid" alt="" />
                                        <div className="collection-content">
                                            <h4>(20 products)</h4>
                                            <h3>fashion</h3>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry....</p>
                                            <a href="category-page.html" className="btn btn-outline">shop now !</a>
                                        </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="collection-block">
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/collection/5.jpg`} className="img-fluid" alt="" />
                                        <div className="collection-content">
                                            <h4>(20 products)</h4>
                                            <h3>fashion</h3>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry....</p>
                                            <a href="category-page.html" className="btn btn-outline">shop now !</a>
                                        </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="collection-block">
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/collection/6.jpg`} className="img-fluid" alt="" />
                                        <div className="collection-content">
                                            <h4>(20 products)</h4>
                                            <h3>fashion</h3>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry....</p>
                                            <a href="category-page.html" className="btn btn-outline">shop now !</a>
                                        </div>
                                </div>
                            </div> */}
                        {/* </div> */}
                        {/* <div className="row partition-collection section-t-space">
                            <div className="col-lg-3 col-md-6">
                                <div className="collection-block">
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/collection/7.jpg`} className="img-fluid" alt="" />
                                        <div className="collection-content">
                                            <h4>(20 products)</h4>
                                            <h3>fashion</h3>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry....</p>
                                            <a href="category-page.html" className="btn btn-outline">shop now !</a>
                                        </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="collection-block">
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/collection/8.jpg`} className="img-fluid" alt="" />
                                        <div className="collection-content">
                                            <h4>(20 products)</h4>
                                            <h3>fashion</h3>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry....</p>
                                            <a href="category-page.html" className="btn btn-outline">shop now !</a>
                                        </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="collection-block">
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/collection/9.jpg`} className="img-fluid" alt="" />
                                        <div className="collection-content">
                                            <h4>(20 products)</h4>
                                            <h3>fashion</h3>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry....</p>
                                            <a href="category-page.html" className="btn btn-outline">shop now !</a>
                                        </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="collection-block">
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/collection/11.jpg`} className="img-fluid" alt="" />
                                        <div className="collection-content">
                                            <h4>(20 products)</h4>
                                            <h3>fashion</h3>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry....</p>
                                            <a href="category-page.html" className="btn btn-outline">shop now !</a>
                                        </div>
                                </div>
                            </div>
                        </div> */}
                    {/* </div>
                </section> */}

            </div>
    
        )
        
            }
        }               

export default Collection