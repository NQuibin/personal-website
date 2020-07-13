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
  text-align: center;
  z-index: 99;
`

const SCover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(164, 102, 78, 0.6);
`

const SGreeting = styled(SH2)`
  color: #fff;
  text-shadow: ${TEXT_SHADOW};
`

const SBrandHeader = styled.h1`
  margin: 2rem;
  font-family: ${HEADER_FONT};
  font-size: 5rem;
  color: #fff;
  text-shadow: ${TEXT_SHADOW};
`

const Header: React.FC = () => {
  return (
    <SGridContainer direction="column" alignItems="center" justify="center">
      <SCover />
      <SGridItem item>
        <RevealFade direction="bottom">
          <SGreeting>Hello, I'm</SGreeting>
          <SBrandHeader>Nik Quibin</SBrandHeader>
          <SGreeting>Software Developer</SGreeting>
        </RevealFade>
      </SGridItem>
    </SGridContainer>
  )
}

export default Header
