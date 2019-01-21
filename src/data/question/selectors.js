import { createSelector } from 'reselect'

import { NAME } from './constants'

const stateSelector = state => state[NAME]

export const questionsSelector = state => ({
  questions: (state[NAME] && Object.values(state[NAME])) || []
})

export const makeQuestionSelector = id =>
  createSelector(stateSelector, questions => questions[id])
