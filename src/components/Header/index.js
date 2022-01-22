import React from 'react';
import './styles.scss';

import Logo from './../../images/gw-logo-transparent.png';

const Header = (props) => {
    return (
        <header className='header'>
            <div className='wrap'>
                <div className='logo'>
                    <img src={Logo} alt="Gadget World Logo" />
                </div>
            </div>
        </header>
    );
};

export default Header;