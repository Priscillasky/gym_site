import {Link} from 'react-router-dom'
import Image from '../IMAGES/main_header.png'

const MainHeader = () => {
  return (
    <header className="main__header">
      <div className=" container main__header-container">
        <div className="main__header-left">
          <h4>#100DaysOFWorkout</h4>
          <h1>Join the legends of the Fitness World</h1>
          <p>lorem ipsum dolor sit amet , consecutor adisparioto elit.Aliqsum excepturi simillique eius optio.</p>
          <Link to= "/plans" className='btn lg' >Get Started</Link>
        </div>
        <div className='main__header-right'>
          <div className='main__header-circle'></div>
          <div className='main__header-image'>
            <img src={Image} alt='Main Header Image'/>
          </div>
        </div>
      </div>
    
    </header>
  )
}

export default MainHeader
