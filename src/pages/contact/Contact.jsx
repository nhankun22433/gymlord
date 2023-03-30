import React from 'react'
import './contact.css'
import Header from '../../components/Header'
import HeaderImg from '../../images/header_bg_2.jpg'
import { MdEmail } from 'react-icons/md'
import { BsMessenger } from 'react-icons/bs'
import { IoLogoWhatsapp } from 'react-icons/io'

const Contact = () => {
   React.useEffect(() => {
     window.scrollTo(0, 0)
   }, [])
  return (
    <>
      <Header title='Get In Touch' img={HeaderImg}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
        provident, odit possimus doloremque omnis nam.
      </Header>
      <section className='contact'>
        <div className='container contact__container'>
          <div className='contact__wrapper'>
            <a
              target='_blank'
              rel='noreferrer noopener'
              href='mailto:support@egattor.com'
            >
              <MdEmail />
            </a>
            <a
              target='_blank'
              rel='noreferrer noopener'
              href='https://www.messenger.com/'
            >
              <BsMessenger />
            </a>
            <a
              target='_blank'
              rel='noreferrer noopener'
              href='https://api.whatsapp.com/'
            >
              <IoLogoWhatsapp />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
