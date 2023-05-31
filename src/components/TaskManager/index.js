import {Component} from 'react'
import {v4 as uuidV4} from 'uuid'
import Tags from '../Tags'
import Tasks from '../Tasks'
import {
  TaskManagerContainer,
  CreateTaskContainer,
  CreatedTasksContainer,
  Heading,
  Input,
  Label,
  Select,
  Option,
  Form,
  CustomButton,
  Para,
  CreateNewTagContainer,
} from './styledComponents'

const initialTagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class TaskManager extends Component {
  state = {
    task: '',
    tag: initialTagsList[0].optionId,
    tasksList: [],
    filteredTag: '',
    tagsList: initialTagsList,
    newTag: '',
  }

  onChangeTask = event => {
    this.setState({task: event.target.value})
  }

  onChangeTag = event => {
    this.setState({tag: event.target.value})
  }

  onAddTask = event => {
    event.preventDefault()
    const {task, tag} = this.state
    const id = uuidV4()
    const obj = {
      id,
      task,
      tag,
    }
    this.setState(prevState => ({
      tasksList: [...prevState.tasksList, obj],
      task: '',
      tag: 'HEALTH',
    }))
  }

  onChangeFilteredTag = id => {
    if (id === null) {
      this.setState({filteredTag: ''})
    } else {
      this.setState({filteredTag: id})
    }
  }

  renderSomething = () => {
    const {tasksList, filteredTag} = this.state
    let filteredList = null
    if (filteredTag === '') {
      filteredList = tasksList
    } else {
      filteredList = tasksList.filter(
        eachTask => eachTask.tag.toUpperCase() === filteredTag.toUpperCase(),
      )
    }

    if (tasksList.length < 1) {
      return <Para center>No Tasks Added Yet</Para>
    }
    return <Tasks tasksList={filteredList} />
  }

  onChangeNewTag = event => {
    this.setState({newTag: event.target.value})
  }

  onCreateNewTag = () => {
    const {newTag} = this.state
    const tagName = newTag.toLowerCase()
    const optionId = newTag.toUpperCase()
    const displayText = tagName.charAt(0).toUpperCase() + tagName.slice(1)
    const obj = {
      optionId,
      displayText,
    }
    this.setState(prevState => ({tagsList: [...prevState.tagsList, obj]}))
  }

  render() {
    const {task, tag, tagsList, newTag} = this.state
    return (
      <TaskManagerContainer>
        <CreateTaskContainer>
          <Heading>Create a task!</Heading>
          <Form onSubmit={this.onAddTask}>
            <Label htmlFor="task">Task</Label>
            <Input
              type="text"
              value={task}
              onChange={this.onChangeTask}
              placeholder="Enter the task here"
              id="task"
            />
            <Label htmlFor="tags">Tags</Label>
            <Select onChange={this.onChangeTag} value={tag} id="tags">
              {tagsList.map(eachOption => {
                const {optionId, displayText} = eachOption
                return (
                  <Option key={optionId} value={optionId}>
                    {displayText}
                  </Option>
                )
              })}
            </Select>
            <CustomButton type="submit">Add Task</CustomButton>
          </Form>
          <CreateNewTagContainer>
            <Para>Create New Tag</Para>
            <Input type="text" onChange={this.onChangeNewTag} value={newTag} />
            <CustomButton type="button" onClick={this.onCreateNewTag}>
              Create
            </CustomButton>
          </CreateNewTagContainer>
        </CreateTaskContainer>
        <CreatedTasksContainer>
          <Para as="h1">Tags</Para>
          <Tags
            tagsList={tagsList}
            onChangeFilteredTag={this.onChangeFilteredTag}
          />
          <Para as="h1">Tasks</Para>
          {this.renderSomething()}
        </CreatedTasksContainer>
      </TaskManagerContainer>
    )
  }
}

export default TaskManager
