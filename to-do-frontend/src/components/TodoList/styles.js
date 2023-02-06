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
  padding-top: 5px;
`
export { ListContainer }
