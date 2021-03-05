import React from 'react'
import './index.scss'
import { useTranslation } from 'react-i18next'

export default function SectionName({ name }) {
  const { t } = useTranslation()
  return <div className='section-name'>{t(`resume.label.${name}`)}</div>
}
