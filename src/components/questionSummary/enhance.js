import { compose, setDisplayName, pure, withProps } from 'recompose'

const enhance = compose(
  setDisplayName('QuestionContainer'),
  withProps(({ published_at }) => {
    if (!published_at) {
      return {}
    }
    const d = new Date(published_at)

    return {
      published_at: d.toLocaleDateString('en-US')
    }
  }),
  pure
)

export default enhance
