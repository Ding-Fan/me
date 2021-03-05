import React from 'react'
import SectionName from '../section-name/index'
import Section from '../section'
import { useTranslation } from 'react-i18next'
import './index.scss'

export default function Experience() {
  const { t } = useTranslation()

  const listPositions = () => {
    const positions = t('resume.content.experience', {
      returnObjects: true,
    })
    const label = t('resume.label.position', {
      returnObjects: true,
    })
    return positions.map((position) => {
      return (
        <div className='position' key={position.companyName}>
          <div className='title'>
            <div className='label'>{label.title}</div>
            <div className='content'>{position.title}</div>
          </div>
          <div className='company-name'>
            <div className='label'>{label.companyName}</div>
            <div className='content'>{position.companyName}</div>
          </div>

          <div className='during'>{position.during}</div>
          <div className='duty'>
            <ul>
              {position.duty.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      )
    })
  }
  return (
    <Section className='experience '>
      <SectionName name='experience' />
      {listPositions()}
    </Section>
  )
}
