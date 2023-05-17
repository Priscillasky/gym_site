import {BsInstagram} from 'react-icons/bs'
import {AiOutlineTwitter} from 'react-icons/ai'
import {FaFacebookF} from 'react-icons/fa'
import {FaLinkedinIn} from 'react-icons/fa'
import HeaderImage from '../../IMAGES/header_bg_5.jpg'
import Header from '../../Components/Header'
import { trainers } from '../../data'
import Trainer from '../../Components/Trainer'
import './trainers.css'

const Trainers = () => {
  return (
    <>
    <Header title= "Our Trainers" image ={HeaderImage}>
    t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
    </Header>
    <section className='trainers'>
      <div className='container trainers__container'>{
         trainers.map(({id , image, name, job,socials})=>{ 
              <Trainer key={id}  image ={image} name={name} job={job} socials={
              [
                {icon: <BsInstagram />,link: socials[0]},
                {icon: <AiOutlineTwitter/>,link: socials[1]},
                {icon: <FaFacebookF />,link: socials[2]},
                {icon: <FaLinkedinIn />,link: socials[3]}

              ]
            }/>
            }) 
        }

    
      
      </div>
    </section>
      
    </>
  )
}

export default Trainers
