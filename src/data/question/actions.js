import { SET, SET_SINGLE, UPDATE_VOTE } from './constants'

export const setQuestions = questions => dispatch =>
  dispatch({ type: SET, payload: questions || [] })

export const setQuestion = question => dispatch =>
  dispatch({ type: SET_SINGLE, payload: question || {} })

export const updateVote = update => dispatch =>
  dispatch({ type: UPDATE_VOTE, payload: update || {} })
