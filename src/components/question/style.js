import css from 'styled-jsx/css'

export default css`
  .question {
    width: 500px;
    margin: 20px;
  }

  ul {
    border: 1px solid #666;
  }

  .choice {
    with: 500px;

    list-style: none;
  }

  .choice a {
    display: block;
    padding: 10px;
    cursor: pointer;
  }

  .active {
    background: #666;
  }

  .choice:nth-child(even) {
    background: #f1edf1;
  }

  .vote {
    padding: 10px;
    background: green;
    border: 0;
    color: #fff;
    margin: 20px;
  }

  @media (max-width: 800px) {
    .question {
      width: auto;
    }
  }
`
