import React, { useEffect } from 'react'
import Logo from '../images/logo.png'
import { FaFacebook } from 'react-icons/fa'
// import { FaLinkdin} from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Footer = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <footer>
      <div className='container footer__container'>
        <article>
          <Link to='/' className='logo'>
            <img src={Logo} alt='Footer Logo' />
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, modi!
            Distinctio illum deleniti ratione sequi.
          </p>
          <div className='footer__socials'>
            <a
              href='https://www.facebook.com/'
              target='_blank'
              rel='noreferrer noopener'
            >
              <FaFacebook />
            </a>
            <a
              href='https://twitter.com/'
              target='_blank'
              rel='noreferrer noopener'
            >
              <AiOutlineTwitter />
            </a>
            <a
              href='https://www.instagram.com/'
              target='_blank'
              rel='noreferrer noopener'
            >
              <AiFillInstagram />
            </a>
          </div>
        </article>
        <article className='article-hover'>
          <h4>Permalinks</h4>
          <Link to='/about'>About</Link>
          <Link to='/plans'>Plans</Link>
          <Link to='/trainers'>Trainers</Link>
          <Link to='/gallery'>Gallery</Link>
          <Link to='/contact'>Contact</Link>
        </article>
        <article className='article-hover'>
          <h4>Insights</h4>
          <Link to='/s'>Blog</Link>
          <Link to='/s'>Case Studies</Link>
          <Link to='/s'>Events</Link>
          <Link to='/s'>Communities</Link>
          <Link to='/s'>FAQs</Link>
        </article>
        <article className='article-hover' >
          <h4>Get In Touch</h4>
          <Link to='/contact'>Contact Us</Link>
          <Link to='/s'>Support</Link>
        </article>
      </div>
      <div className='footer__copyright'>
        <small>2023 Gymer's Paradise </small>
      </div>
    </footer>
  )
}

export default Footer
