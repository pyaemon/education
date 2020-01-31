import React from 'react';
import '../App.css';
import img1 from '../assets/6.jpg';
import img2 from '../assets/5.jpg';
import img3 from '../assets/8.jpg';
import img4 from '../assets/1.jpg';
import 'font-awesome/css/font-awesome.min.css';

const Event=()=>{
   
    return(
      <div className="">
        <div className="pt-5">
            <h1 className="text-center">Upcoming Event</h1>
            <p className="pt-2 text-center">Upcoming Educational Events for your future career. Join us now!</p>
        </div>

            <div className="pt-4 container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <img src={img1} alt="" className="img-fluid" style={{width:"600px",height:"300px"}}/>
                        <div className="pt-3"><h4>WordPress and the future of Internet</h4></div>
                        <div className="pt-3">
                            <i className="fa fa-clock-o"> 6:30 AM - 5:00 PM</i>
                            <i className="pl-4 fa fa-map-marker">Venue A, Main Campus</i>
                        </div>        
                        <div className="pt-4"><p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo.</p></div>
                        <hr/>
                        <div className="pt-3 row">
                            <div className="col-lg-4 col-sm-12" >
                                <img src={img2} alt="" style={{width:"150px"}}/>
                            </div>
                            <div className="col-lg-8 col-sm-12">
                                <h4>Using Technology in School</h4>
                                <div className="pt-2">
                                    <i className="fa fa-clock-o"> 6:30 AM - 5:00 PM</i>
                                </div> 
                                <div className="pt-2">
                                    <i className="fa fa-map-marker">Venue A, Main Campus</i>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div className="pt-3 row">
                            <div className="col-lg-4">
                                <img src={img3} alt="" style={{width:"150px"}}/>
                            </div>
                            <div className="col-lg-8">
                                <h4>Social Media in our Daily Life</h4>
                                <div className="pt-2">
                                    <i className="fa fa-clock-o"> 6:30 AM - 5:00 PM</i>
                                </div> 
                                <div className="pt-2">
                                    <i className="fa fa-map-marker">Venue A, Main Campus</i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <img src={img4} alt="" className="img-fluid" style={{width:"600px",height:"300px"}}/>
                        <div className="pt-3"><h4>UI/UX Design – The Basics</h4></div>
                        <div className="pt-3">
                            <i className="fa fa-clock-o"> 6:30 AM - 5:00 PM</i>
                            <i className="pl-4 fa fa-map-marker">Venue A, Main Campus</i>
                        </div>        
                        <div className="pt-4"><p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo.</p></div>
                        <hr/>
                        <div className="pt-3 row">
                            <div className="col-lg-4">
                                <img src={img2} alt="" style={{width:"150px"}}/>
                            </div>
                            <div className="col-lg-8">
                                <h4>Using Technology in School</h4>
                                <div className="pt-2">
                                    <i className="fa fa-clock-o"> 6:30 AM - 5:00 PM</i>
                                </div> 
                                <div className="pt-2">
                                    <i className="fa fa-map-marker">Venue A, Main Campus</i>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div className="pt-3 row">
                            <div className="col-lg-4">
                                <img src={img3} alt="" style={{width:"150px"}}/>
                            </div>
                            <div className="col-lg-8">
                                <h4>Social Media in our Daily Life</h4>
                                <div className="pt-2">
                                    <i className="fa fa-clock-o"> 6:30 AM - 5:00 PM</i>
                                </div> 
                                <div className="pt-2">
                                    <i className="fa fa-map-marker">Venue A, Main Campus</i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            <div className="pt-5 pb-5 row justify-content-center">
                <p className="font-weight-bold "><span className="p-3 border border-dark">View All Events</span></p>
            </div>     
        </div>  
    )

}

export default Event