import React from 'react'
import SectionName from '../section-name/index'
import { useTranslation } from 'react-i18next'
import Section from '../section'
import './index.scss'

export default function Education() {
  const { t } = useTranslation()
  const label = t('resume.label.university', {
    returnObjects: true,
  })
  return (
    <Section className='education'>
      <SectionName name='education' />
      <div className='school'>
        <div className='icon'></div>
        <div className='name'>
          <div className='label'>{label.name}</div>
          <div className='content'> {t('resume.content.education.name')}</div>
        </div>
        <div className='major'>
          <div className='label'>{label.major}</div>
          <div className='content'> {t('resume.content.education.major')}</div>
        </div>
        <div className='time-range'>
          {t('resume.content.education.timeRange')}
        </div>
      </div>
    </Section>
  )
}
