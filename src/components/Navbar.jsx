import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
    const toggleMenu = () => {
        const menu = document.querySelector('.menu');
        menu.classList.toggle('active');
      };
  return (
    <>
   
     <div class="topnav container-fluid">
        <div class="logo">
            <img src="flowerdashbord.png" alt="" />
        </div>
        <div class="man">
            <img src="man.png" alt="" />
            <p>Monoj</p>
        </div>
    </div>
    <nav class="navbar">
        
    <div className="menu-toggle" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="menu">
            <a href="#"><i class="fa-solid fa-window-restore"></i> Dashboard</a>
            <a href="#"><i class="fa-solid fa-school-circle-check"></i> Order</a>
            <div class="dropdown">
                <a href="#"><i class="fa-solid fa-boxes-stacked"></i> Products <i class="fa-solid fa-angle-down"></i></a>
                <div class="dropdown-content">
                    <a href="#">Listed Products</a>
                    <a href="#">Listed Products</a>
                    <a href="#">Compliments </a>
                </div>
            </div>
            <div class="dropdown">
                <a href="#"><i class="fa-solid fa-clock"></i> Manage <i class="fa-solid fa-angle-down"></i></a>
                <div class="dropdown-content">
                    <Link to="/catagory">Categories</Link>
                    <Link to="/coupons">Coupons</Link>
                    <Link to="/deliveryCharges">Delivery Charges </Link>
                </div>
            </div>
            <a href="#"><i class="fa-solid fa-clipboard-list"></i> Contents</a>
            <a href="#"><i class="fa-solid fa-right-from-bracket"></i> Logout</a>
        </div>
    </nav>
    </>
  )
}

export default Navbar