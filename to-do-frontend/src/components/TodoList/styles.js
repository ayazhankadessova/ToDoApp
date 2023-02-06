import styled from 'styled-components'

// ul - unordered list bc order is meaningless
const ListContainer = styled.ul`
  padding: 0;
  cursor: pointer;
`
// item in the list
const Row = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* Top, bottom 8px; left right 0 */
  padding: 8px 0;
  font-size: 1rem;
`

const Text = styled.span``

// or styled(Text)
const DeleteSymbol = styled.span``
export { ListContainer, Row, Text, DeleteSymbol }
