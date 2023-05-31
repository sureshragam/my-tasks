import styled from 'styled-components'

export const TaskManagerContainer = styled.div`
  height: 100vh;
  display: flex;
  font-family: 'Roboto';
`
export const CreateTaskContainer = styled.div`
  flex-basis: 40%;
  height: 100%;
  padding: 10px 20px;
  background-color: #131213;
`
export const CreatedTasksContainer = styled(CreateTaskContainer)`
  flex-basis: 60%;
  background-color: #000000;
`
export const Heading = styled.h1`
  font-size: 50px;
  margin-top: 0px;
  text-align: center;
  color: #f3aa4e;
  margin-top: 50px;
`
export const Form = styled.form`
  padding: 10px 30px;
`
export const Label = styled.label`
  display: block;
  width: 80%;
  margin-bottom: 10px;
  color: white;
  font-size: 20px;
`
export const Input = styled.input`
  display: block;
  width: 100%;
  height: 40px;
  margin-bottom: 35px;
  padding-left: 10px;
  outline: none;
`
export const Select = styled.select`
  display: block;
  width: 100%;
  height: 40px;
  margin-bottom: 35px;
  outline: none;
`
export const Option = styled.option`
  padding: 10px 20px;
`
export const CustomButton = styled.button`
  padding: 10px 20px;
  background-color: #f3aa4e;
  color: white;
  margin: auto;
  display: block;
  cursor: pointer;
  border-radius: 5px;
`
export const Para = styled.p`
  color: white;
  margin-top: ${props => (props.center ? '60px' : '40px')};
  font-size: 30px;
  text-align: ${props => (props.center ? 'center' : 'start')};
`
export const CreateNewTagContainer = styled.div`
  padding: 10px 30px;
  margin-top: 30px;
`
