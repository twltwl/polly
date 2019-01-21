import { makeQuestionSelector } from 'src/data/question/selectors'

export default (state, { id }) => makeQuestionSelector(id)(state)
