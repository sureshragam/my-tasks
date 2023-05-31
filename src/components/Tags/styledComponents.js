import styled from 'styled-components'

export const TagsContainer = styled.ul`
  padding-left: 0px;
  display: flex;
  gap: 15px;
`
export const Tag = styled.li`
  list-style-type: none;
  border-radius: 10px;
  border-style: solid;
  border-color: #f3aa4e;
  padding: 5px 10px;
  background-color: ${props =>
    props.isActive === 'active' ? '#f3aa4e' : 'transparent'};
`
export const TagButton = styled.button`
  margin: 0px;
  background-color: transparent;
  color: white;
  outline: none;
  border-style: none;
  cursor: pointer;
`
