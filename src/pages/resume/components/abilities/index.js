
import React from 'react'
import SectionName from '../section-name/index'
import { useTranslation } from 'react-i18next'
import Section from '../section'
import './index.scss'

export default function Abilities() {
	const { t } = useTranslation()

	const listAbilities = () => {
		const abilities = t('resume.content.abilities', {
			returnObjects: true,
		})
		return abilities.map((ability) => {
			return <li key={ability}>{ability}</li>
		})
	}
	return (
		<Section className='abilities '>
			<SectionName name='abilities' />
			<ul>{listAbilities()}</ul>
		</Section>
	)
}