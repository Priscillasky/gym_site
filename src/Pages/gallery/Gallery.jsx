import Header from '../../Components/Header'
import HeaderImage from '../../IMAGES/header_bg_3.jpg'
import './gallery.css'


import './gallery.css'

const Gallery = () => {
  const galleryLength = 15;
  const images = [];

  for (let i = 1;i<= galleryLength;i++){
    images.push(require(`../../IMAGES/gallery${i}.jpg`))
  }
  
  return (
    <>
      <Header title= "Our Gallery" image={HeaderImage}>
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      </Header>

      <section className='gallery'>
        <div className='container gallery__container'>
          {
            images.map((image, index)=>{
              return <article key = {index}>
                <img src={image} alt={`Gallery Image ${index +1}`}/>
              
              </article>
            })
          }
        
        </div>

      </section>


    </>
  )
}

export default Gallery

 