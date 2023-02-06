import styled from 'styled-components'

// ul - unordered list bc order is meaningless
export const ListContainer = styled.ul`
  padding: 0;
  cursor: pointer;
`
// item in the list
export const Row = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* Top, bottom 8px; left right 0 */
  padding: 8px 0;
  font-size: 1rem;
`

export const Text = styled.span`
  ::first-letter {
    text-transform: capitalize;
  }
  color: ${(props) => (props.isCompleted ? 'green' : 'blue')};
  text-decoration: ${(props) => (props.isCompleted ? 'line-through' : 'none')};
`
export const DeleteSymbol = styled(Text)``
