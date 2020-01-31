import React from 'react';
import '../App.css';
import edu from '../assets/edu1.png';
import edu1 from '../assets/edu1.jpg';
import edu2 from '../assets/edu2.jpg';


// import Bg from '../assets/2.jpg'

const Background=()=>{
    //let imgUrl = 'images/1.jpg';
    
        return (
            // <div className="pt-3" style = {{  backgroundImage: 'url(' + imgUrl + ')',backgroundSize: 'cover', backgroundRepeat: 'no-repeat',height:'100%'}} >
                <div className="" style={{backgroundColor: '#a2b5e8'}}>
                {/* <img className='img-fluid' src={Bg} alt='background' style={{position:'absolute',width:'2000px'}} /> */}
                <div className="container text-center" >
              
                    <div className="d-flex flex-wrap ">
                       
                        <div className="col-lg-4 p-5" >
                            
                                <img src={edu} className="rounded-circle" alt="..." style={{width:'100px'}}/>
                       
                            
                            <h5 className="pt-2 font-weight-bold ">Excellent Falcuty</h5>
                            <p className="pt-3">Sed ut perspiciatis unde omnis iste natus error sit
                                accusantium doloremque laudantium. </p>
                        </div>
                        <div className="col-lg-4 col-sm-12 p-5" >
                            <img src={edu1} className="rounded-circle" alt="..." style={{width:'100px'}} />
                            <h5 className="pt-2 font-weight-bold ">INDUSTRY LEADER</h5>
                            <p className="pt-3">Sed ut perspiciatis unde omnis iste natus error sit
                                accusantium doloremque laudantium. </p>
                        </div>
                        <div className="col-lg-4 col-sm-12 p-5" >
                            <img src={edu2} className="rounded-circle" alt="..." style={{width:'100px'}} />
                            <h5 className="pt-2 font-weight-bold ">Thousand Students</h5>
                            <p className="pt-3">Sed ut perspiciatis unde omnis iste natus error sit
                                accusantium doloremque laudantium. </p>
                        </div>
                    </div> 
                </div>    
            </div>            
        )   
}

export default Background