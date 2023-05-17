import {Link} from 'react-router-dom'
import Logo from '../IMAGES/logo.png'
import {FaLinkedin} from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'

const Footer = () => {
  return (
   <footer>
    <div className='container footer__container'>
        <article>
            <Link to ="/" className='logo'>
                <img src={Logo} alt = "Footer Logo"/> 
            </Link>
            <p>
            Classification on the other hand is a supervised machine-learning technique that groups data into classes or categories. I have three classes for my project that is to say positive, negative, and neutral. 
            </p>
            <div className='footer__socials'>
                <a href='https://www.linkedin.com/in/gum-priscilla-556b61231/' target="_blank" rel ="noreferrer noopener">
                <FaLinkedin />
                </a>

                <a href='https://www.facebook.com' target="_blank" rel ="noreferrer noopener">
                <FaFacebook />
                </a>

                <a href='https://www.twitter.com' target="_blank" rel ="noreferrer noopener">
                <AiOutlineTwitter/>
                </a>

                <a href='https://www.instagram.com' target="_blank" rel ="noreferrer noopener">
                <AiFillInstagram/>
                </a>
            </div>
        
        </article>
        <article>
            <h4>Permalinks</h4>
            <Link to= "/about">About</Link>
            <Link to= "/plans">Plans</Link>
            <Link to= "/trainers">Trainers</Link>
            <Link to= "/gallery">Gallery</Link>
            <Link to= "/contact">Contacts</Link>
        </article>

        <article>
            <h4>Insights</h4>
            <Link to= "/s">Blog</Link>
            <Link to= "/s">Case studies</Link>
            <Link to= "/s">Events</Link>
            <Link to= "/s">Communities</Link>
            <Link to= "/s">FAQs</Link>
        </article>

        <article>
            <h4>Get In Touch</h4>
            <Link to= "/contact">About</Link>
            <Link to= "/s">Plans</Link>
        </article>

    </div>
   
   <div className='footer__copyright'>
    <small>2022 GUM REACT DEVELOPER &copy;</small>
   </div>
   </footer>
  )
}

export default Footer
