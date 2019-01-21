import { Header, QuestionSummary, QuestionSummaryList } from 'src/components'
import enhance from './enhance'

const QuestionsContainer = ({ questions }) => (
  <>
    <Header label="Questions" />
    <QuestionSummaryList>
      {questions.map(question => (
        <QuestionSummary {...question} key={question.url} />
      ))}
    </QuestionSummaryList>
  </>
)

export default enhance(QuestionsContainer)
