import PropTypes from 'prop-types'

import style from './style'
import enhance from './enhance'

const _Question = ({ question, choices, voteFor, setVoteFor, vote }) => {
  const total = choices.reduce((acc, curr) => acc + curr.votes, 0)

  return (
    <div className="question">
      <h2>Question: {question}</h2>
      <ul>
        {/* eslint-disable */}
        {choices.map(({ choice, votes, url }, i) => (
          <li className="choice" key={`${choice}-${i}`}>
            <a
              className={(voteFor === url && 'active') || ''}
              onClick={() => setVoteFor(url)}
            >
              <strong>{choice}</strong> <span className="votes">{votes} votes</span>{' '}
              <span className="percentage">
                ({((votes / total) * 100).toFixed(0)}
                %)
              </span>
            </a>
          </li>
        ))}
      </ul>
      <button className="vote" onClick={vote}>
        Vote here
      </button>
      <style jsx>{style}</style>
    </div>
  )
}

_Question.propTypes = {
  question: PropTypes.string,
  choices: PropTypes.array,
  onVote: PropTypes.func.isRequired
}

_Question.defaultProps = {
  question: '',
  choices: []
}

export const Question = enhance(_Question)
