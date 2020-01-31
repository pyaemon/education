import React from 'react';
//import Form from './Form.js';

const BgForm=()=>{
    let imgUrl='images/bg2.jpg';
    return(
        <div className="pt-3" style = {{  backgroundImage: 'url(' + imgUrl + ')',backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
            <div className="container">
                <div className="d-flex flex-wrap">
                    <div className="col-6 p-5">
                        <p className="text-white">CHANGE YOUR LIFE TODAY!</p>
                        <h4 className="text-white">Get Unlimited Access to Premium Courses</h4>
                    </div>
                    <div className="">
                    </div> 
                    <div className="col-6">
                        
                    </div>
                </div>         
            </div>
        </div>
    )
}
export default BgForm;