import React, { Component } from 'react';
import '../App.css'
import img1 from '../assets/5.jpg';
import img2 from '../assets/8.jpg';
import img5 from '../assets/7.jpg';
import img4 from '../assets/4.jpg';
import img3 from '../assets/3.jpg'


export class Card extends Component {
    render() {
        return (
            <div className="container">
                <h1 className="text-center">Trending Course</h1>
                <div className="pt-5 pl-2 row justify-content-center my-6">
                    <div className=" pb-2 col-md-6 col-lg-3  col-sm-12">
                        <div className="card mx-auto">
                            <img src={img3} className="card-img-top" alt="..." style={{height:'150px'}} />
                            <div className="card-body">
                                <h5 className="card-title">Become a PHP Master and Make Money Fast</h5>
                                <div className="pt-3 row">
                                    <div className="col-lg-4">
                                        <img src={img4} className="rounded-circle" alt="..." style={{width:'70px'}} />
                                    </div>
                                    <div className="col-lg-8">
                                        <p>Henry H. Garrick</p>
                                        <a href="">View Profile</a>
                                    </div>
                                </div> 
                            </div>
                            <div className="card-footer">
                                <a href="" className="btn btn-primary">Free</a>
                                <i className="float-right fa fa-user">3</i>
                                <i className="float-right fa fa-comment-o">3</i>    
                            </div>
                        </div>
                    </div>
                    <div className=" pb-2 col-md-6 col-lg-3  col-sm-12">
                        <div className="card mx-auto">
                            <img src={img5} className="card-img-top" alt="..." style={{height:'150px'}} />
                            <div className="card-body">
                                <h5 className="card-title">Refactoring: Extract and Inline Variable</h5>
                                <div className="pt-3 row">
                                    <div className="col-lg-4">
                                        <img src={img4} className="rounded-circle" alt="..." style={{width:'70px'}} />
                                    </div>
                                    <div className="col-lg-8">
                                        <p>Henry H. Garrick</p>
                                        <a href="">View Profile</a>
                                    </div>
                                </div> 
                            </div>
                            <div className="card-footer">
                                <a href="" className="btn btn-primary">Free</a>
                                <i className="float-right fa fa-user">3</i>
                                <i className="float-right fa fa-comment-o">3</i>
                            </div>
                        </div>
                    </div>
                    <div className=" pb-2 col-md-6 col-lg-3  col-sm-12">
                        <div className="card mx-auto">
                            <img src={img3} className="card-img-top" alt="..."style={{height:'150px'}} />
                            <div className="card-body">
                                <h5 className="card-title">Refactoring: Extract and Inline Variable</h5>
                                <div className="pt-3 row">
                                    <div className="col-lg-4">
                                        <img src={img4} className="rounded-circle" alt="..." style={{width:'70px'}} />
                                    </div>
                                    <div className="col-lg-8">
                                        <p>Henry H. Garrick</p>
                                        <a href="">View Profile</a>
                                    </div>
                                </div> 
                            </div>
                            <div className="card-footer">
                                <a href="" className="btn btn-primary">Free</a>
                                <i className="float-right fa fa-user">3</i>
                                <i className="float-right fa fa-comment-o">3</i>
                            </div>
                        </div>
                    </div>
                    <div className=" pb-2 col-md-6 col-lg-3  col-sm-12">
                        <div className="card mx-auto">
                            <img src={img2} className="card-img-top" alt="..."style={{height:'150px'}}/>
                            <div className="card-body">
                                <h5 className="card-title">Android App Development</h5>
                                <div className="pt-3 row">
                                    <div className="col-lg-4">
                                        <img src={img4} className="rounded-circle" alt="..." style={{width:'70px'}} />
                                    </div>
                                    <div className="col-lg-8">
                                        <p>Henry H. Garrick</p>
                                        <a href="">View Profile</a>
                                    </div>
                                </div> 
                            </div>
                            <div className="card-footer">
                                <a href="" className="btn btn-primary">Free</a>
                                <i className="float-right fa fa-user">3</i>
                                <i className="float-right fa fa-comment-o">3</i>
                            </div>
                        </div>
                    </div>
                    </div>

                    <div className="pt-5 pl-2 row justify-content-center my-6">
                    <div className=" pb-2 col-md-6 col-lg-3  col-sm-12">
                        <div className="card mx-auto">
                            <img src={img2} className="card-img-top" alt="..." style={{height:'150px'}} />
                            <div className="card-body">
                                <h5 className="card-title">Building a Slack Bot with Node.js</h5>
                                <div className="pt-3 row">
                                    <div className="col-lg-4">
                                        <img src={img4} className="rounded-circle" alt="..." style={{width:'70px'}} />
                                    </div>
                                    <div className="col-lg-8">
                                        <p>Henry H. Garrick</p>
                                        <a href="">View Profile</a>
                                    </div>
                                </div> 
                            </div>
                            <div className="card-footer">
                                <a href="" className="btn btn-primary">Free</a>
                                <i className="float-right fa fa-user">3</i>
                                <i className="float-right fa fa-comment-o">3</i>
                            </div>
                        </div>
                    </div>
                    <div className=" pb-2 col-md-6 col-lg-3  col-sm-12">
                        <div className="card mx-auto">
                            <img src={img3} className="card-img-top" alt="..." style={{height:'150px'}} />
                            <div className="card-body">
                                <h5 className="card-title">Angular 2 Essential Training JavaScript</h5>
                                <div className="pt-3 row">
                                    <div className="col-lg-4">
                                        <img src={img4} className="rounded-circle" alt="..." style={{width:'70px'}} />
                                    </div>
                                    <div className="col-lg-8">
                                        <p>Henry H. Garrick</p>
                                        <a href="">View Profile</a>
                                    </div>
                                </div> 
                            </div>
                            <div className="card-footer">
                                <a href="" className="btn btn-danger">$100</a>
                                <i className="float-right fa fa-user">3</i>
                                <i className="float-right fa fa-comment-o">3</i>
                            </div>
                        </div>
                    </div>
                    <div className=" pb-2 col-md-6 col-lg-3  col-sm-12">
                        <div className="card mx-auto">
                            <img src={img5} className="card-img-top" alt="..."style={{height:'150px'}} />
                            <div className="card-body">
                                <h5 className="card-title">Angular 2 Essential Training JavaScript</h5>
                                <div className="pt-3 row">
                                    <div className="col-lg-4">
                                        <img src={img4} className="rounded-circle" alt="..." style={{width:'70px'}} />
                                    </div>
                                    <div className="col-lg-8">
                                        <p>Henry H. Garrick</p>
                                        <a href="">View Profile</a>
                                    </div>
                                </div> 
                            </div>
                            <div className="card-footer">
                                <a href="" className="btn btn-primary">Free</a>
                                <i className="float-right fa fa-user">3</i>
                                <i className="float-right fa fa-comment-o">3</i>
                            </div>
                        </div>
                    </div>
                    <div className=" pb-2 col-md-6 col-lg-3 col-sm-12">
                        <div className="card mx-auto">
                            <img src={img2} className="card-img-top" alt="..." style={{height:'150px'}} />
                            <div className="card-body">
                                <h5 className="card-title">WordPress: Creating Custom Plugins</h5>
                                <div className="pt-3 row">
                                    <div className="col-lg-4">
                                        <img src={img4} className="rounded-circle" alt="..." style={{width:'70px'}} />
                                    </div>
                                    <div className="col-lg-8">
                                        <p>Henry H. Garrick</p>
                                        <a href="">View Profile</a>
                                    </div>
                                </div> 
                            </div>
                            <div className="card-footer">
                                <a href="" className="btn btn-danger ">$100</a>
                                <i className="float-right fa fa-user">3</i>
                                <i className="float-right fa fa-comment-o">3</i>
                            </div>
                        </div>
                    </div>
                </div>
                    <div className="pt-5 pb-5 row justify-content-center">
                       <p className="font-weight-bold "><span className="p-3 border border-dark">Browser all Course</span></p>
                    </div>
                </div>
        )
    }
}

export default Card