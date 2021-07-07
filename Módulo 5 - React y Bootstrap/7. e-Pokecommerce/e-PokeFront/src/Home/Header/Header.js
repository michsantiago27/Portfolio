import React, {useContext} from 'react';
import { MyContext } from '../../myContext';
import './Header.css';

function Menu() {
    return (
        <div className='menu'>
            <div>Opción 1</div>
            <div>Opción 2</div>
            <div>{useContext(MyContext).user}</div>
        </div>
    );
}

function Logo() {
    return (
        <div className='logo'>
            <div className='logoimg'></div>
            <div>PokeSan</div>
        </div>
    );
}

function Header(props) {
    return (
        <div className="container-fluid header" >
            <Logo/>
            <Menu user={props.user}/>
        </div>
    );
}

export default Header;