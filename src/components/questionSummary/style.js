import css from 'styled-jsx/css'

export default css`
  .questionSummary {
    background-color: #f1edf1;
    margin: 10px;
    width: 250px;
  }

  .questionSummary a {
    color: #333;
    text-decoration: none;
    padding: 20px;

    display: block;
    height: 100%;
  }

  .questionSummary span {
    color: #555;
  }

  @media (max-width: 800px) {
    .questionSummary {
      width: 100%;
    }
  }
`
