import React from 'react'
import { trainers } from '../../data'
import Header from '../../components/Header'
import HeaderImg from '../../images/header_bg_5.jpg'
import { BsInstagram } from 'react-icons/bs'
import { AiOutlineTwitter } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'
import './trainers.css'
import Trainer from '../../components/Trainer'

const Trainers = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <Header title='Our Trainers' img={HeaderImg}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
        consectetur adipisci dolorum exercitationem est eaque.
      </Header>
      <section className='trainers'>
        <div className='container trainers__container'>
          {trainers.map(({ id, image, name, job, socials }) => {
            return (
              <Trainer
                key={id}
                image={image}
                name={name}
                job={job}
                socials={[
                  { icon: <BsInstagram />, link: socials[0] },
                  { icon: <AiOutlineTwitter />, link: socials[1] },
                  { icon: <FaFacebookF />, link: socials[2] },
                ]}
              />
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Trainers
