import React, { useEffect } from 'react'
import Header from '../../components/Header'
import HeaderImg from '../../images/header_bg_1.jpg'
import StoryImg from '../../images/about1.jpg'
import VisionImg from '../../images/about2.jpg'
import MissionImg from '../../images/about3.jpg'
import './about.css'

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <Header title='About Us' img={HeaderImg}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, nostrum.
      </Header>

      <section className='about__story'>
        <div className='container about__story-container'>
          <div className='about__section-img'>
            <img src={StoryImg} alt='' />
          </div>
          <div className='about__section-content'>
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              repellendus totam, atque, odit facilis fugiat eveniet nemo
              nesciunt obcaecati reprehenderit iste odio. Eum iusto, molestiae
              aliquid suscipit fugit ducimus repellat?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed illo,
              doloremque dolores pariatur sint tempore?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
              magni?
            </p>
          </div>
        </div>
      </section>

      <section className='about__Vision'>
        <div className='container about__Vision-container'>
          <div className='about__section-content'>
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              repellendus totam, atque, odit facilis fugiat eveniet nemo
              nesciunt obcaecati reprehenderit iste odio. Eum iusto, molestiae
              aliquid suscipit fugit ducimus repellat?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed illo,
              doloremque dolores pariatur sint tempore?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
              magni?
            </p>
          </div>
          <div className='about__section-img'>
            <img src={VisionImg} alt='' />
          </div>
        </div>
      </section>

      <section className='about__Mission'>
        <div className='container about__Mission-container'>
          <div className='about__section-img'>
            <img src={MissionImg} alt='' />
          </div>
          <div className='about__section-content'>
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              repellendus totam, atque, odit facilis fugiat eveniet nemo
              nesciunt obcaecati reprehenderit iste odio. Eum iusto, molestiae
              aliquid suscipit fugit ducimus repellat?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed illo,
              doloremque dolores pariatur sint tempore?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
              magni?
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
