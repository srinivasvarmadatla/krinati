import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import cart from '../../Assets/shopping-cart.png';
import { FaBars, FaTimes } from 'react-icons/fa';

function Header() {
    const navRef = useRef();

    const shownavbar = () => {
        navRef.current.classList.toggle("resp_nav");
    };

    return (
        <div className='header-main-1'>
            <div className='header-main-LOGO'>
                <h2>KRINATI</h2>
            </div>
            <div className='header-main-items' ref={navRef}>
                <ul className='header-main-item-ul'>
                    <Link to="/Shop">
                        <li className='header-main-list-item'>Shop</li>
                    </Link>
                    <Link to="/Mens">
                        <li className='header-main-list-item'>Mens</li>
                    </Link>
                    <Link to="/Women">
                        <li className='header-main-list-item'>Women</li>
                    </Link>
                    <Link to="/Kids">
                        <li className='header-main-list-item'>Kids</li>
                    </Link>
                </ul>
                <div className='header-main-list-item-right'>
                    <div className='header-main-list-item-btn'>
                        <Link to="/Login">
                            <button className='button-35'>LOGIN</button>
                        </Link>
                        <Link to="/Cart">
                            <img src={cart} alt="Cart" className="cart-icon" />
                        </Link>
                    </div>
                </div>
                <div className='nav-btn-close' onClick={shownavbar}>
                    <FaTimes />
                </div>
            </div>
            <div className='header-main-list-searchbar'>
                <input className='menu-searchbar' type='text' placeholder='Shoes' />
            </div>
            <div className='hambuger' onClick={shownavbar}>
                <FaBars />
            </div>
        </div>
    );
}

export default Header;
