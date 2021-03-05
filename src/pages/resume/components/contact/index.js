import React from 'react'
import { useTranslation } from 'react-i18next'
import './index.scss'
import Item from './components/Item/index'
import Section from '../section'

export default function Contact() {
  const { t } = useTranslation()

  return (
    <Section className='contact '>
      <Item
        className='address'
        icon={'map-marker-alt'}
        content={t('resume.content.address')}
      />
      <Item
        className='email'
        icon={['far', 'envelope']}
        content={'ouud@fastmail.com'}
      />
      <Item
        className='mobile'
        icon={'mobile-alt'}
        content={'+86 13764840020'}
      />
      <Item
        className='github'
        icon={['fab', 'github']}
        content={'https://github.com/Ding-Fan'}
      />
    </Section>
  )
}
