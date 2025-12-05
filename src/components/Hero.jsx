import React from 'react'
import About from './About'
import Services from './Services'
import Portfolio from './Portfolio'
import Team from './Team'
import Contact from './Contact'
import Clients from './Clients'
import Features from './Features'
import Action from './Action'
import Stats from './Stats'
import Testimonials from './Testimonials'

const Hero = () => {
  return (
    <>
      
      <section id="hero" className="hero section dark-background">
        <img src="/src/assets/img/hero-bg.jpg" alt data-aos="fade-in" />
        <div className="container">
          <div className="row justify-content-center text-center" data-aos="fade-up" data-aos-delay={100}>
            <div className="col-xl-6 col-lg-8">
              <h2>Powerful Digital Solutions With GP<span>.</span></h2>
              <p>We are team of talented digital marketers</p>
            </div>
          </div>
          <div className="row gy-4 mt-5 justify-content-center" data-aos="fade-up" data-aos-delay={200}>
            <div className="col-xl-2 col-md-4" data-aos="fade-up" data-aos-delay={300}>
              <div className="icon-box">
                <i className="bi bi-binoculars" />
                <h3><a href>Lorem Ipsum</a></h3>
              </div>
            </div>
            <div className="col-xl-2 col-md-4" data-aos="fade-up" data-aos-delay={400}>
              <div className="icon-box">
                <i className="bi bi-bullseye" />
                <h3><a href>Dolor Sitema</a></h3>
              </div>
            </div>
            <div className="col-xl-2 col-md-4" data-aos="fade-up" data-aos-delay={500}>
              <div className="icon-box">
                <i className="bi bi-fullscreen-exit" />
                <h3><a href>Sedare Perspiciatis</a></h3>
              </div>
            </div>
            <div className="col-xl-2 col-md-4" data-aos="fade-up" data-aos-delay={600}>
              <div className="icon-box">
                <i className="bi bi-card-list" />
                <h3><a href>Magni Dolores</a></h3>
              </div>
            </div>
            <div className="col-xl-2 col-md-4" data-aos="fade-up" data-aos-delay={700}>
              <div className="icon-box">
                <i className="bi bi-gem" />
                <h3><a href>Nemos Enimade</a></h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <About></About>
      <Clients></Clients>
      <Features></Features>
      <Services></Services>
      <Action></Action>
      <Portfolio></Portfolio>
      <Stats></Stats>
      <Testimonials></Testimonials>
      <Team></Team>
      <Contact></Contact>
    </>
  )
}

export default Hero