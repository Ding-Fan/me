import React, { useState } from 'react'
import './index.scss'
// import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
// import { DO_PRINT_PAGE } from '@src/redux/types/index.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function MenuWidget() {
  const [isActive, setIsActive] = useState(false)
  // const dispatch = useDispatch()
  const { i18n } = useTranslation()

  const handleClickMenu = () => {
    setIsActive(!isActive)
  }

  const handleClickLanguage = () => {
    if (i18n.language === 'en') {
      i18n.changeLanguage("zh")
    } else {
      i18n.changeLanguage("en")
    }
  }

  // const handleClickPrint = () => {
  //   window.open(
  //     `${process.env.PUBLIC_URL}范鼎-简历-FAN-DING-resume.pdf`,
  //     '_none'
  //   )
  // }

  return (
    <div className={`menu-widget ${isActive ? 'active' : ''}`}>
      <div className='board'>
        <div className='item menu' onClick={handleClickMenu}>
          <FontAwesomeIcon icon={'bars'} />
        </div>
        <div className='item home'>
          <FontAwesomeIcon icon={'home'} />
        </div>
        <div className='item language' onClick={handleClickLanguage}
        >
          <FontAwesomeIcon icon={'language'} />
        </div>
        {/* <div
          className='item print'
          // onClick={() => dispatch({ type: DO_PRINT_PAGE })}
          onClick={handleClickPrint}
        >
          <FontAwesomeIcon icon={'print'} />
        </div> */}
      </div>
    </div>
  )
}
