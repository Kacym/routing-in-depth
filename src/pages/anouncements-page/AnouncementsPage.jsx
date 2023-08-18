import React from 'react'
import { styled } from 'styled-components'

const AnouncementsPage = () => {
  return (
    <StyledAnouncementsPage>
      <ContentBox>
        <h2>Anouncements page</h2>
      </ContentBox>
    </StyledAnouncementsPage>
  )
}

const StyledAnouncementsPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 75%;
  height: 100vh;

  margin: 0 auto;

  background-color: #E3E7ED;
`

const ContentBox = styled.div`
  width: 95%;
  height: 85vh;

  padding: 20px 0 0 20px;
  background-color: white;
`
export default AnouncementsPage