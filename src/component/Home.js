import React, { Component } from 'react';
import '../App.css';
import Slider1 from './slider.js';
import Card from './Card.js';
import Background from './Background.js';
import Event from './Event.js';
import BgForm from './BgForm.js';
import News from './News.js';


export class Home extends Component {
    render() {
        return (
            <div className="">
                <Slider1/>
                <div className='p-4'>
                    <div className="container p-3" style={{backgroundColor:'#000'}}>
                        <div className="d-flex flex-wrap justify-content-center ">
                                <div className="col-sm-3 p-3"  style={{maxWidth:300, minWidth:250}}>
                                    <input className="form-control" type="text" placeholder="Default input"/>
                                </div>
                                <div className="col-sm-3 p-3" style={{maxWidth:300, minWidth:250}} >
                                    <input className="form-control" type="text" placeholder="Default input"/>    
                                </div>
                                <div className="col-sm-3 p-3"  style={{maxWidth:300, minWidth:250}}>
                                    <input className="form-control" type="text" placeholder="Default input"/>    
                                </div>
                                <div className="col-sm-3 p-3" style={{maxWidth:300, minWidth:250}}>
                                    <input className="form-control" type="text" placeholder="Search"/>    
                                </div>  
                        </div>
                    </div>
                </div>  
                    <Card/>
                    <Background/>
                    <Event/>
                    <BgForm/>
                    <News/>
            </div>    
        )
    }
}

export default Home