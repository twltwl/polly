import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'

import reducers from 'src/redux/reducer'
import { organizeReducers } from 'src/utils/reducer'

const initialState = organizeReducers(reducers)

const combinedReducers = combineReducers(organizeReducers(reducers, true))

export default (state = initialState) => {
  const middlewares = [thunkMiddleware]

  return createStore(
    combinedReducers,
    state,
    compose(applyMiddleware(...middlewares))
  )
}
