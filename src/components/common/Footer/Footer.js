import React from 'react'

import "./Footer.css"
 const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-links">
                <div>Privacy</div>
                <div>Support</div>
                <div>Contact</div>

            </div>
            <div className="copyright">
                &copy; GiftedBrain tech apps {new Date().getFullYear()}
            </div>
            
        </div>
    )
}
export default Footer