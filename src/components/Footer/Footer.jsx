import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img className='logo' src={assets.logo} alt="" />
                    <p>Tomato is your go-to platform for fast, fresh, and reliable food delivery. We connect you with your favorite local restaurants, delivering happiness one meal at a time.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+91-36573-53862</li>
                        <li>contact@KhanaKhajana.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">
                footer-copyright"Copyright 2025 © KhanaKhajana.com - All Right Reserved.
            </p>
        </div>
    )
}

export default Footer
