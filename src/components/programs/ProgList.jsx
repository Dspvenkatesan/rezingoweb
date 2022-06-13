import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';




class ProgList extends Component {
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
   
      

    render() {
        
        return (
			<>
            {this.state.records.map((item, i) => (

<div className="col-sm-6 col-lg-4 mt-4"  key={i}> 
  <div className="card shadow-sm bg-transparent h-shadow all-ts h-translatey-sm">
	<img src={item.logo} className="card-img-top" alt={item.title}/>
	<div className="card-body">
		<a href="#"><span className="badge bg-secondary text-light mb-2 fw-normal px-2 py-1">Total Levels</span></a>
		<h4 className="mb-2">{item.title}</h4>
		<div className="mb-4 op-07">{item.descriptions}</div>
		<small className="ls2 fw-bold text-uppercase op-05 mb-2 d-block">Features</small>
       
		<div className="row g-0 mb-2 clearfix car-features">
			<div className="col-6 mb-2"><i className="icon-car-meter"></i>Name:{item.name}</div>
			<div className="col-6 mb-2"><i className="icon-car-door"></i>{item.levelDesc}</div>
			{/* <div className="col-6"><i className=" icon-car-cogs2"></i>{item.description}</div>
			<div className="col-6"><i className="icon-car-pump"></i>No.of Days {item.noofDays}</div> */}
		</div>
      
	</div>
	<div className="card-footer d-flex justify-content-between align-items-center bg-white py-3">
		<div>
			<h3 className="mb-0 h3 fw-semibold">Free</h3>
			<span className="op-06">per day</span>
		</div>
		
         <NavLink to="/Progdetails" > <button type="submit" className="button button-red rounded-pill m-0" value={item.id} onClick={this.handleClick}>View Details</button></NavLink>
        
	</div>
</div>
</div>
))} 
	
     </>
                    
                
                    
            
        );
    }
}

export default ProgList;
