import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Item({ icon, className, content }) {
  // https://www.reddit.com/r/reactjs/comments/8ppmmn/why_is_my_onclick_not_working/
  function handleClick(newPage) {
    window.open(newPage, '_blank')
  }

  function chooseContent() {
    let result = <div className='content'>{content}</div>
    if (className === 'github') {
      result = (
        <div
          className='content'
          onClick={() => handleClick('https://github.com/Ding-Fan')}
        >
          {content}
        </div>
      )
    }
    return result
  }

  return (
    <div className={`item ${className}`}>
      <div className='icon'>
        <FontAwesomeIcon icon={icon} />
      </div>
      {chooseContent()}
    </div>
  )
}
