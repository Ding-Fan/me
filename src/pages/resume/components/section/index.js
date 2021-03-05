import React from 'react'
import './index.scss'

export default function Section({ className, children }) {
  return <section className={`${className}`}>{children}</section>
}
