import './index.scss'
import Resume from './resume/index'
import Container from 'react-bootstrap/Container'
import MenuWidget from '@src/components/menu-widget/index'
import { Switch, Route } from 'react-router-dom'

function Pages() {
  return (
    <Container className='box'>
      <MenuWidget />
      <Switch>
        <Route exact path='/'>
          <Resume />
        </Route>
        <Route path='/resume'>
          <Resume />
        </Route>
      </Switch>
    </Container>
  )
}

export default Pages
