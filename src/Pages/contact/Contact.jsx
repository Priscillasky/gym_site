import Header from '../../Components/Header'
import HeaderImage from '../../IMAGES/header_bg_2.jpg'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'


import './contact.css'

const Contact = () => {
  return (
    <>
      <Header title= "Get In Touch" image={HeaderImage}>
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      </Header>
      <section className='contact'>
        <div className='container contact__container'>
          <div className='contact__wrapper'>
            <a href = "mailto:priscillasky542@gmail.com" target= "_blank" rel = "noreferrer noopener"><MdEmail /></a>
            <a href = "http://messenger.com" target= "_blank" rel = "noreferrer noopener"><BsMessenger /></a>
            <a href = "https://wa.me/+256788450661" target= "_blank" rel = "noreferrer noopener"><IoLogoWhatsapp/></a>
          </div>
      
      </div>
      </section>
    </>
  )
}

export default Contact
