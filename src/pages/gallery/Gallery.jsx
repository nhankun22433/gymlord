import React from 'react'
import Header from '../../components/Header'
import HeaderImg from '../../images/header_bg_3.jpg'


import './gallery.css'

const Gallery = () => {
  const galleryLength = 15
  const imgs = []

  for (let i = 1; i <= galleryLength; i++) {
    imgs.push(require(`../../images/gallery${i}.jpg`))
  }

  console.log(imgs);
 React.useEffect(() => {
   window.scrollTo(0, 0)
 }, [])
  return (
    <>
      <Header title='Our Gallery' img={HeaderImg}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, nulla
        repellendus molestiae optio veritatis error.
      </Header>

      <section className='gallery'>
        <div className='container gallery__container'>
          {imgs.map((img, index) => {
            return (
              <article key={index}>
                <img src={img} alt={`Gallery Img ${index + 1}`} />
              </article>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Gallery
