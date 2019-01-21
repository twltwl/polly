import { compose, setDisplayName, pure, withProps } from 'recompose'
import { connect } from 'react-redux'
import { api, actions } from 'src/data/question'

import selectors from './selectors'

const enhance = compose(
  setDisplayName('QuestionContainer'),
  connect(selectors),
  withProps(({ dispatch }) => ({
    onVote: async (url, questionUrl) => {
      const update = await api.saveAnswer(url)
      dispatch(
        actions.updateVote({
          questionUrl,
          update
        })
      )
    }
  })),
  pure
)

export default enhance
