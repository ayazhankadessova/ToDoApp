import styled from 'styled-components'

const FormContainer = styled.form`
  /* so its in a row -> flex */
  display: flex;
  align-items: center;
  justify-content: center;
  /* top bottom 5px
  left, right - 0px */
  padding: 5px 0px;
  /* for small screens */
  @media (max-width: 420px) {
    flex-direction: column;
  }
`

const Input = styled.input`
  background-color: #d9e2ec;
  width: 100%;
  padding: 8px;
  border: 1px solid #102a43;
  border-radius: 8px;

  /* Emhanced focus */
  :focus {
    border: 3px solid #102a43;
    outline: none;
  }
`

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: #102a43;
  border-radius: 18px;
  border: 2px solid #102a43;
  color: white;
  margin-left: 1em;
  padding: 8px 20px;
  cursor: pointer;
  font-size: 0.8rem;
  /* bolder */
  font-weight: 600;
  /* for small screens: will drop */
  @media (max-width: 420px) {
    margin-top: 10px;
    margin-left: 0;
    width: 100%;
  }
`

export { FormContainer, Input, Button }
