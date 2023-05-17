import Image from '../IMAGES/values.jpg'
import SectionHead from './SectionHead'
import {GiCutDiamond} from 'react-icons/gi'
import {values} from '../data'
import Card from '../Card'
import { FaDiceFive } from 'react-icons/fa'

const Values = () => {
  return (
    <section className='values'>
        <div className='container values__container'>
            <div className='values__left'>
                <div className='values__image'>
                    <img src={Image} alt='value' />
                </div>
            </div>
            <div className='values__right'>
                <SectionHead icon={<GiCutDiamond />} title='Values'/>
                <p>
                 vbhajxn cankamlsqhjb bhwddj xm dgdquskas b Classification on the other hand is a supervised machine-learning technique that groups data into classes or categories. I have three classes for my project that is to say positive, negative, and neutral. 
                </p>
                
                <div className='values__wrapper'>
                    {
                        values.map(({id,icon,title,desc})=>{
                            return <Card className="values__value">
                                <span>{icon}</span>
                                <h4>{title}</h4>
                                <small>{desc}</small>
                            </Card>
                        })
                    }
                </div>
                
            </div>
        </div>
    
    </section>
  )
}

export default Values
