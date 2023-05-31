import {TasksContainer, Task, TaskName, TaskTag} from './styledComponents'

const Tasks = props => {
  const {tasksList} = props
  return (
    <TasksContainer>
      {tasksList.map(eachTask => {
        const {id, task, tag} = eachTask
        const tagName = tag.charAt(0).toUpperCase() + tag.slice(1).toLowerCase()
        return (
          <Task key={id}>
            <TaskName>{task}</TaskName>
            <TaskTag>{tagName}</TaskTag>
          </Task>
        )
      })}
    </TasksContainer>
  )
}

export default Tasks
