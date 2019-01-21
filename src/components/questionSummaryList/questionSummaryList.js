import style from './style'

export const QuestionSummaryList = ({ children }) => (
  <div className="questionSummaryList">
    <div className="items">{children}</div>
    <style jsx>{style}</style>
  </div>
)
