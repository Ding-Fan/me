import React from 'react'
import SectionName from '../section-name/index'
import Section from '../section'
import { useTranslation } from 'react-i18next'

export default function Summary() {
  const { t } = useTranslation()
  return (
    <Section className='summary '>
      <SectionName name='summary' />
      <div className='content'>{t('resume.content.summary')}</div>
    </Section>
  )
}
