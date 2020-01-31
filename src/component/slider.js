import React from 'react';
// import { color } from '../../../config/color'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import 'normalize.css/normalize.css';
import './slider-animations.css';
import '../App.css';

const content = [
    {
        title: 'PHP',
        description:
            'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.',
        image: require('../assets/2.jpg'),
        button: "Read More",
        user: 'Luan Gjokaj',
        
    },
    {
        title: 'Android',
        description:
            'Aenean eu leo quam. Pellentesque ornare sem lacinia  nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.',
        image: require('../assets/3.jpg'),
        button: "Read More",
        user: 'Erich Behrens',
       
    },
    {
        title: 'Nodejs',
        description:
            'quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentumconsectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.',
        image: require('../assets/bg.jpg'),
        button: "Read More",
        user: 'Bruno Vizovskyy',
        
    }
];

const Slider1 = () => {
    return (
        <div>
            <Slider className="slider-wrapper" style={{width: '100%'}} autoplay={3000}>
                {content.map((item, index) => (
                    <div
                        key={index}
                        className="slider-content"
                        style={{ background: `url('${item.image}') no-repeat center center` }}
                    >
                        <div className="inner">
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default Slider1