import React from 'react'
import { styled } from 'styled-components'
import Button from '../../../components/UI/Button'

const Materials = ({ material, clickHandler }) => {

  return (
    <StyledMaterialPlate>
      <h2>{material.title}</h2>
      <Button onClick={() => clickHandler(material.id)} width="200px" title="Details"/>
    </StyledMaterialPlate>
  )
}

const StyledMaterialPlate = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 20px;
  margin-bottom: 20px;
  background-color: white;
`

export default Materials