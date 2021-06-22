import React from 'react';
import './Header.css';

function Menu() {
    return (
        <div className='menu'>
            <div>Opción 1</div>
            <div>Opción 2</div>
            <div>Opción 3</div>
        </div>
    );
}

function Logo() {
    return (
        <div className='logo'>
            <div className='logoimg'></div>
            <div>KASAK</div>
        </div>
    );
}

function Header() {
    return (
        <div className="container-fluid header" >
            <Logo/>
            <Menu/>
        </div>
    );
}

export default Header;