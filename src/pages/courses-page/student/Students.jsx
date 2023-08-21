import React from 'react'
import { styled } from 'styled-components'
import Button from '../../../components/UI/Button'

const Students = ({ student, clickHandler }) => {

  return (
    <StyledStudentPlate>
      <h2>{student.name}</h2>
      <Button onClick={() => clickHandler(student.id)} width="200px" title="Details"/>
    </StyledStudentPlate>
  )
}

const StyledStudentPlate = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 20px;
  margin-bottom: 20px;
  background-color: white;
`

export default Students