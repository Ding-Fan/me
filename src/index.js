import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.scss'
import Pages from './pages/index.js'
import reportWebVitals from './reportWebVitals'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import resources from './locale/resources.js'

import { Provider } from 'react-redux'
import store from './redux/store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faMobileAlt,
  faMapMarkerAlt,
  faBars,
  faHome,
  faPrint,
} from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

library.add(
  faGithub,
  faMobileAlt,
  faMapMarkerAlt,
  faBars,
  faPrint,
  faHome,
  faEnvelope
)

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'zh',
    fallbackLng: 'zh',

    interpolation: {
      escapeValue: false,
    },
  })

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Pages />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
