import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import "./footer.css"

export const Footer = () => {
  return (
    <div className='footer-div'>
        <section className='footer-subdiv'>
            <p className='footer-subdiv-heading'>
                Join our Travel agency newsletter to receive our best vacation deals
            </p>
            <p className='footer-subdiv-text'>
                You can unsubscribe anytime.
            </p> 
            <div className='input-div'>
                <form className='input'>
                    <input type="email" name="email" placeholder='Enter your Email' className='footer-email'/>
                <Button buttonStyle="btn--outline">Subscribe</Button>
                </form>
            </div>
        </section>
        <div className='footer-links'>
                    <div className='footer-links-wrapper'>
                        <div className='footer-links-item'>
                            <h2>About Us</h2>
                            <Link to="/sign-up">How we operate</Link>
                            <Link to="/">Inventory</Link>
                            <Link to="/">Careers</Link>
                            <Link to="/">Testimonials</Link>
                            <Link to="/">Terms of services</Link>
                        </div>
                         <div className='footer-links-item'>
                            <h2>Videos</h2>
                            <Link to="/">Agency</Link>
                            <Link to="/">Tickets booking</Link>
                            <Link to="/">Ambassadors</Link>
                            <Link to="/">Countries</Link>
                        </div>
                    </div>
                    <div className='footer-links-wrapper'>
                        <div className='footer-links-item'>
                            <h2>Contact Us</h2>
                            <Link to="/">Sponsorship</Link>
                            <Link to="/">Contact</Link>
                            <Link to="/">Destinations</Link>
                            <Link to="/">Support</Link>
                        </div>
                         <div className='footer-links-item'>
                            <h2>Social media</h2>
                            <Link to="/">Twitter</Link>
                            <Link to="/">Youtube</Link>
                            <Link to="/">Facebook</Link>
                            <Link to="/">Instagram</Link>
                        </div>
                    </div>
                </div>
                <section className='media'>
                    <div className='media-wrapper'>
                        <div className='footer-logo'>
                            <Link to="/" className='media-logo'>
                                TRVL <img className="fa-fab" src="https://img.icons8.com/offices/23/000000/country.png"/>
                            </Link>
                        </div>
                        <small className='web-rights'>TRVL &copy; 2020</small>
                        <div className='media-icons'>
                            <Link className='media-icon-link facebook' to="/" target="_blank"
                            aria-label="Facebook">
                                <img src="https://img.icons8.com/color/32/000000/facebook.png"/>
                            </Link>
                            <Link className='media-icon-link whatsapp' to="/" target="_blank"
                            aria-label="Whatsapp">
                                <img src="https://img.icons8.com/color/32/000000/whatsapp--v1.png"/>
                            </Link>
                            <Link className='media-icon-link twitter' to="/" target="_blank"
                            aria-label="Twitter">
                                <img src="https://img.icons8.com/color/32/000000/twitter-circled--v1.png"/>
                            </Link>
                            <Link className='media-icon-link instagram' to="/" target="_blank"
                            aria-label="Instagram">
                                <img src="https://img.icons8.com/color/32/000000/instagram-new--v1.png"/>
                            </Link>
                            
                        </div>
                    </div>

                </section>
    </div>
  )
}
