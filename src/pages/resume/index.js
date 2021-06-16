import React from 'react'
import SizeA4 from '@src/components/size-a4/index'
import Header from './components/header/index'
import Contact from './components/contact/index'
import Summary from './components/summary/index'
import Skills from './components/skills/index'
import Abilities from './components/abilities/index'
import Experience from './components/experience/index'
import Education from './components/education/index'
import Certifications from './components/certifications/index'

export default function Resume() {
  return (
    <React.Fragment>
      <SizeA4>
        <Header />
        <Contact />
        <Summary />
        <Skills />
        <Abilities />
        <Education />
        <Certifications />
      </SizeA4>
      <div style={{ marginBottom: '30px' }}></div>
      <SizeA4>
        <Experience />
      </SizeA4>
    </React.Fragment>

  )
}
