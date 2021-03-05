import React from 'react'
import SizeA4 from '@src/components/size-a4/index'
import Header from './components/header/index'
import Contact from './components/contact/index'
import Summary from './components/summary/index'
import Skills from './components/skills/index'
import Experience from './components/experience/index'
import Education from './components/education/index'
import Certifications from './components/certifications/index'

export default function Resume() {
  return (
    <SizeA4>
      <Header />
      <Contact />
      <Summary />
      <Skills />
      <Experience />
      <Education />
      <Certifications />
    </SizeA4>
  )
}
