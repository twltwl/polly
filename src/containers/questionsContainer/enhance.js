import { compose, setDisplayName, pure } from 'recompose'
import { connect } from 'react-redux'

import { questionsSelector as selectors } from 'src/data/question/selectors'

const enhance = compose(
  setDisplayName('QuestionsContainer'),
  connect(selectors),
  pure
)

export default enhance
