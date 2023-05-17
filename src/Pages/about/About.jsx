import Header from '../../Components/Header'
import HeaderImage from '../../IMAGES/header_bg_1.jpg'
import StoryImage from '../../IMAGES/about1.jpg'
import VisionImage from '../../IMAGES/about2.jpg'
import MissionImage from '../../IMAGES/about3.jpg'
import './about.css'


const About = () => {
  return (
    <>
    <Header title= "About us" image={HeaderImage}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  </Header>
    <section className='about__story'>
      <div className='container about__story-container'>
      <div className='about__section-image'>
      <img src= {StoryImage} alt = 'Story'/>
    </div>
        <div className='about__section-content'>
        <h1>Our Story</h1>
          <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </p>
          <p>
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo
          </p>
          <p>
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </p>
    
        </div>
        

      </div>
    
    </section>


    <section className='about__Vision'>
    <div className='container about__Vision-container'>
      
      <div className='about__section-content'>
      <h1>Our Vision</h1>
        <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </p>
        <p>
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo
        </p>
        
      </div>
      <div className='about__section-image'>
        <img src= {VisionImage} alt = 'Vision'/>
      </div>

    </div>
  
  </section>

  <section className='about__mission'>
      <div className='container about__mission-container'>
      <div className='about__section-image'>
      <img src= {MissionImage} alt = 'Mission'/>
    </div>
        <div className='about__section-content'>
        <h1>Our Mission</h1>
          <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </p>
          <p>
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo
          </p>
    
        </div>
        

      </div>
    
    </section>
    </>
  )
}

export default About
