import styled from 'styled-components'

export const TasksContainer = styled.ul`
  padding-left: 0px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  color: white;
`
export const Task = styled.li`
  padding: 15px 20px;
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1a171d;
  border-radius: 5px;
`
export const TaskName = styled.p`
  color: white;
  margin: 0;
`
export const TaskTag = styled.p`
  background-color: blue;
  color: black;
  background-color: #f3aa4e;
  padding: 5px 10px;
  border-radius: 10px;
  margin: 0;
  font-size: 12px;
  font-weight: bold;
`
