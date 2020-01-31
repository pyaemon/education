import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import img1 from '../assets/7.jpg';
import img3 from '../assets/8.jpg'

const News=()=>{
    return(
        <div className="">
            <div className="pt-4">
                <h1 className="text-center">LASTEST NEWS</h1>
                <p className="pt-2 text-center">Upcoming Educational Events for your future careerers. Join us now!</p>
            </div>

                <div className="pt-4 container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <img src={img3} className="img-fluid" alt=""/>
                            <div className="pt-2">
                                <i className="fa fa-user"> Henry H. Garrick </i>
                                <i className="pl-4 fa fa-clock-o">November 16, 2016 </i>
                            </div>
                            <div className="pt-3">
                                <h4>The future of Web Design</h4>
                            </div>
                            <div className="pt-4 pb-5 row justify-content-center">
                                <p className="font-weight-bold "><span className="p-2 border border-dark">Read More</span></p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <img src={img1} className="img-fluid" alt=""/>
                            <div className="pt-2">
                                <i className="fa fa-user"> Henry H. Garrick </i>
                                <i className="pl-4 fa fa-clock-o">November 16, 2016 </i>
                            </div>
                            <div className="pt-3 ">
                                <h4>Tips for being better Musician</h4>
                            </div>
                            <div className="pt-4 pb-5 row justify-content-center">
                                <p className="font-weight-bold "><span className="p-2 border border-dark">Read More</span></p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <img src={img3} className="img-fluid" alt="" />
                            <div className="pt-2">
                                <i className="fa fa-user"> Henry H. Garrick </i>
                                <i className="pl-4 fa fa-clock-o">November 16, 2016 </i>
                            </div>
                            <div className="pt-3 ">
                                <h4>How to get better at Learning</h4>
                            </div>
                            <div className="pt-4 pb-5 row justify-content-center">
                                <p className="font-weight-bold "><span className="p-2 border border-dark">Read More</span></p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
       
            
    )
}
export default News;