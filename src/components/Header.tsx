import React from 'react'
import { Grid } from '@material-ui/core'
import styled from 'styled-components'
import { RevealFade } from 'src/components/Reveal'
import { SH2 } from 'src/components/Text'
import { HEADER_FONT, TEXT_SHADOW } from 'src/constants/styles'
import headerBackground from 'src/assets/header_background.jpg'

const SGridContainer = styled(props => <Grid container {...props} />)`
  position: relative;
  min-height: 100vh;
  background-image: url(${headerBackground});
`

const SGridItem = styled(props => <Grid item {...props} />)`
  z-index: 99;
  padding: 1rem;
  text-align: center;
`

const SCover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(164, 102, 78, 0.6);
`

const SGreeting = styled.h1`
  margin: 0 0 2rem 0;
  font-family: ${HEADER_FONT};
  font-size: 5rem;
  text-shadow: ${TEXT_SHADOW};
  color: #fff;
`

const SJobTitle = styled(SH2)`
  margin: 0;
  font-family: ${HEADER_FONT};
  font-size: 2.5rem;
  text-shadow: ${TEXT_SHADOW};
  color: #fff;
`

const Header: React.FC = () => {
  return (
    <SGridContainer direction="column" alignItems="center" justify="center">
      <SCover />
      <SGridItem item>
        <RevealFade direction="bottom">
          <SGreeting>Hello,&nbsp;I'm Nik&nbsp;Quibin</SGreeting>
          <SJobTitle>Software Developer</SJobTitle>
        </RevealFade>
      </SGridItem>
    </SGridContainer>
  )
}

export default Header
