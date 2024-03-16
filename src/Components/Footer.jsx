import React from 'react'
    import './footer.css'
    import movie from '../assets/movie.png'
    import instagram_icon from'../assets/instagram_icon.png'
    import pintester_icon from'../assets/pintester_icon.png'
    import whatsapp_icon from'../assets/whatsapp_icon.png'

    export const Footer = () => {
    return (
        <div className='footer'>
            <hr/>
            <div className="footer-logo">
            
                <img src={movie} alt="" />
                <p>Movies 9</p>
                </div>
                
                <ul className="footer-links">
                    <li>Company</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Privacy Policy</li>
                    <li>Terms and Conditions</li>
                </ul>
                <div className="footer-social-icon">
    <div className="footer-icons-container">
        <img src={instagram_icon} alt="" />
    </div>
    <div className="footer-icons-container">
        <img src={pintester_icon} alt="" />
    </div>
    <div className="footer-icons-container">
        <img src={whatsapp_icon} alt="" />
    </div>
</div>

                <div className="footer-copyright">
                    <hr />
                    <p>Copyright @2024 - All Rights Reserved</p>
                </div>
                
        </div>
    )
    }
