import { Header, Question } from 'src/components'
import enhance from './enhance'

const QuestionContainer = props => (
  <>
    <Header label="Question detail" />
    <Question {...props} />
  </>
)

export default enhance(QuestionContainer)
