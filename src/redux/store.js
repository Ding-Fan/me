import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootreducer from './reducer'

const initialstate = {}

const middleware = [thunk]

const store = createStore(
  rootreducer,
  initialstate,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store

// https://dev.to/gautham495/react-redux-with-hooks-for-beginners-25a3
// https://medium.com/weekly-webtips/2020-redux-tutorial-with-hooks-and-thunk-8a6a4be6f9de

// https://www.digitalocean.com/community/tutorials/how-to-manage-state-in-react-with-redux#step-3-%E2%80%94-dispatching-changes-in-a-component
// https://thoughtbot.com/blog/using-redux-with-react-hooks
