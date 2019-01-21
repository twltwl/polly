import QuestionContainer from 'src/containers/questionContainer'
import { api, actions } from 'src/data/question'

const Question = ({ id }) => <QuestionContainer id={id} />

Question.getInitialProps = async ({ store, asPath }) => {
  const response = await api.fetchQuestion(asPath)
  store.dispatch(actions.setQuestion(response))

  return { id: asPath }
}

export default Question
