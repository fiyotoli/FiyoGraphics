import React from 'react'
import About from '../components/About'
import Services from '../components/Services'
import Skill from '../components/Skill'
import Portfolio from '../components/Portfolio'
import Blog from '../components/Blog'
import Testimony from '../components/Testimony'
import Contact from '../components/contact'
import Faq from '../components/Faq'
import Hero from '../components/Hero'

function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Skill/>
      <Portfolio />
      <Blog />
      <Testimony />
      <Contact />
      <Faq />
    </div>
  )
}

export default Home
