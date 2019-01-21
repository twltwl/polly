import { makeReducer } from 'src/utils/reducer'
import { NAME, SET, SET_SINGLE, UPDATE_VOTE } from './constants'

const initialState = {}

export default makeReducer(NAME, initialState, {
  [SET]: (state, action) =>
    action.payload.reduce((acc, curr) => ({ ...acc, [curr.url]: curr }), {}),
  [SET_SINGLE]: (state, { payload }) => ({
    ...state,
    [payload.url]: payload
  }),
  [UPDATE_VOTE]: (state, { payload: { update, questionUrl } }) => {
    const part = state[questionUrl]

    return {
      ...state,
      [questionUrl]: {
        ...part,
        choices: part.choices.map(
          choice => (choice.url === update.url ? update : choice)
        )
      }
    }
  }
})
