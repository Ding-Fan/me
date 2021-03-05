import React from 'react'
import { useTranslation } from 'react-i18next'
import './index.scss'

export default function Header() {
  const { t } = useTranslation()
  return (
    <header>
      <div className='name'>{t('resume.content.name')}</div>
    </header>
  )
}
