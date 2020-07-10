import React from 'react'
import styled from 'styled-components'

const Dot = styled.div`
  display: inline-block;
  width: 0.5rem;
  height: 0.5rem;
  margin: 4rem 0.5rem;
  background-color: #878787;
  border-radius: 100%;
`

const Divider: React.FC = () => {
  const dots = [...Array(5)].map((_, i) => <Dot key={i} />)

  return <>{dots}</>
}

export default Divider
