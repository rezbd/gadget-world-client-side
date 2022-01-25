import React from 'react';
// purpose of this component to have two images with two links
import './styles.scss';
import phone from '../../images/phones.jpg';
import computer from '../../images/computer.jpg';

const Directory = props => {
    return (
        <div className='directory'>
            <div className='wrap'>
                <div
                    className='item'
                    style={{
                        backgroundImage: `url(${phone})`
                    }}
                >
                    <a href="">Phone Gadgets</a>
                </div>
                <div
                    className='item'
                    style={{
                        backgroundImage: `url(${computer})`
                    }}
                >
                    <a href="">Computer Gadgets</a>
                </div>
            </div>
        </div>
    )
}

export default Directory;