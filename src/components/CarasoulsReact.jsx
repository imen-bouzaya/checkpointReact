import React from 'react'
import { Carousel } from 'react-bootstrap'

const CarasoulsReact = () => {
  return (
    <div><Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://daniloduchesnes.com/wp-content/uploads/2019/07/fonctionnalites-facebook.png"
        alt="Facebook"
      />
      <Carousel.Caption>
        <h3>Facebook</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://f.hellowork.com/blogdumoderateur/2019/11/twitter-logo.jpg"
        alt="Twitter"
      />
  
      <Carousel.Caption>
        <h3>Twitter</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png"
        alt="Instagram"
      />
  
      <Carousel.Caption>
        <h3>Instagram</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel></div>
  )
}

export default CarasoulsReact