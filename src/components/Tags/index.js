import {Component} from 'react'
import {TagsContainer, Tag, TagButton} from './styledComponents'

class Tags extends Component {
  state = {activeTag: ''}

  onChangeActiveTag = id => {
    const {activeTag} = this.state
    const {onChangeFilteredTag} = this.props

    if (activeTag === id) {
      onChangeFilteredTag(null)
      this.setState({activeTag: ''})
    } else {
      onChangeFilteredTag(id)
      this.setState({activeTag: id})
    }
  }

  render() {
    const {activeTag} = this.state
    const {tagsList} = this.props

    return (
      <TagsContainer>
        {tagsList.map(eachTag => {
          const {optionId, displayText} = eachTag
          const onclickTag = () => {
            this.onChangeActiveTag(optionId)
          }
          const isActive = activeTag === optionId ? 'active' : 'inActive'
          return (
            <Tag key={optionId} isActive={isActive}>
              <TagButton type="button" onClick={onclickTag}>
                {displayText}
              </TagButton>
            </Tag>
          )
        })}
      </TagsContainer>
    )
  }
}

export default Tags
