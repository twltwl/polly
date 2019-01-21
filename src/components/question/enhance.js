import {
  compose,
  setDisplayName,
  pure,
  withState,
  withHandlers
} from 'recompose'

const enhance = compose(
  setDisplayName('QuestionContainer'),
  withState('voteFor', 'setVoteFor', null),
  withHandlers({
    vote: ({ voteFor, onVote, url }) => () => voteFor && onVote(voteFor, url)
  }),
  pure
)

export default enhance
