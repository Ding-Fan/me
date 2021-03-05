import React from 'react'
import SectionName from '../section-name/index'
import { useTranslation } from 'react-i18next'
import Section from '../section'
import './index.scss'

export default function Skills() {
  const { t } = useTranslation()

  const listSkills = () => {
    const skills = t('resume.content.skills', {
      returnObjects: true,
    })
    return skills.map((skill) => {
      return <li key={skill}>{skill}</li>
    })
  }
  return (
    <Section className='skills '>
      <SectionName name='skills' />
      <ul>{listSkills()}</ul>
    </Section>
  )
}
