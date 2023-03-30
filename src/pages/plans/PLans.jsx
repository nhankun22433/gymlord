import React from 'react'
import {plans} from '../../data'
import Header from '../../components/Header'
import HeaderImg from '../../images/header_bg_4.jpg'
import Card from '../../UI/Card'
import './plans.css'

const PLans = () => {
   React.useEffect(() => {
     window.scrollTo(0, 0)
   }, [])
  return (
    <>
      <Header title='Membership Plans' img={HeaderImg}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius modi
        aperiam officia corporis enim deleniti.
      </Header>
      <section className='plans'>
        <div className='container plans__container'>
          {
            plans.map(({id, name, desc, price, features})=> {
              return (
                <Card key={id} className='plan'>
                  <h3> {name} </h3>
                  <small> {desc} </small>
                  <h1>{`${price}k`}</h1><h2>/month</h2>
                  <h4>Features</h4>
                  {features.map(({ feature, available }, index) => {
                    return (
                      <p key={index} className={!available ? 'disabled' : ''} >
                        {feature}
                      </p>
                    )
                  })
                  }
                  <button className='btn lg' >Choose Plan</button>
                </Card>
              )
            })
          }
        </div>
      </section>
    </>
  )
}

export default PLans