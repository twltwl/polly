import Link from 'next/link'
import PropTypes from 'prop-types'

import style from './style'
import enhance from './enhance'

const _QuestionSummary = ({ question, url, choices, published_at }) => (
  <div className="questionSummary">
    <Link href="question" as={url}>
      <a href={url}>
        <h2>{question}</h2>
        <p className="publishedAt">{published_at}</p>
        <p className="choices">{choices.length} Choices</p>
      </a>
    </Link>
    <style jsx>{style}</style>
  </div>
)

_QuestionSummary.propTypes = {
  question: PropTypes.string,
  url: PropTypes.string,
  choices: PropTypes.array,
  published_at: PropTypes.string
}

_QuestionSummary.defaultProps = {
  question: '',
  url: '',
  choices: [],
  published_at: ''
}

export const QuestionSummary = enhance(_QuestionSummary)
