import React from 'react'


import "./Footer.css"
 const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-links">
                <div className="footer-link">Privacy</div>
                <div className="footer-link">Support</div>
                <div className="footer-link">Billing</div>

            </div>
            <div className="copyright">
                &copy; GiftedBrain tech apps {new Date().getFullYear()}
            </div>
            
        </div>
    )
}
export default Footer