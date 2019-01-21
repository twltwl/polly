import QuestionsContainer from 'src/containers/questionsContainer'
import { api, actions } from 'src/data/question'

const Questions = () => (
  <>
    <QuestionsContainer />
  </>
)

Questions.getInitialProps = async ({ store }) => {
  const response = await api.fetchQuestions()
  store.dispatch(actions.setQuestions(response))

  return {}
}

export default Questions
