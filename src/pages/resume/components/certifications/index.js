import React from 'react'
import SectionName from '../section-name/index'
import { useTranslation } from 'react-i18next'
import Section from '../section'
import './index.scss'

export default function Certifications() {
  const { t } = useTranslation()

  return (
    <Section className='certifications '>
      <SectionName name='certifications' />
      <div className='certification'>
        <div className='icon'></div>
        <div className='name'>{t('resume.content.certifications.name')}</div>
        <div className='time'>{t('resume.content.certifications.time')}</div>
      </div>
    </Section>
  )
}
