import React from 'react'
import styled from 'styled-components'
import { Zoom, Fade } from 'react-awesome-reveal'
import { Grid } from '@material-ui/core'
import { SH2, SH3, SP } from 'src/components/Text'
import headshot from 'src/assets/headshot.jpg'

const SHeadshot = styled.img`
  margin: 0 auto 2rem auto;
  width: 100%;
  max-width: 300px;
  border-radius: 100%;
  box-shadow: 0 0 8px 3px rgba(85, 85, 85, 0.5);
`

const About: React.FC = () => {
  return (
    <Grid container justify="center" spacing={3}>
      <Grid item xs={12}>
        <Zoom triggerOnce>
          <SHeadshot alt="Nikki Quibin's headshot" src={headshot} />
        </Zoom>
      </Grid>
      <Grid item xs={12} sm={7}>
        <Fade triggerOnce direction="bottom">
          <SP>
            I'm a software developer based in Toronto, Canada. Coding is one of my
            favourite things to do since it allows me to build beautiful and
            awesome applications. I also enjoy teaching and helping others find
            the joys of coding.
          </SP>
        </Fade>
      </Grid>
      <Grid item xs={12}>
        <Fade triggerOnce direction="bottom">
          <SH2>I can help you with...</SH2>
        </Fade>
      </Grid>
      <Grid item xs={12} sm={5}>
        <Fade triggerOnce cascade direction="left">
          <SH3>Developing applications.</SH3>
          <SP>
            I focus mainly on web development, so I can help you create websites
            that is mobile-friendly and runs across multiple devices.
          </SP>
        </Fade>
      </Grid>
      <Grid item xs={12} sm={5}>
        <Fade triggerOnce cascade direction="right">
          <SH3>Learning how to code.</SH3>
          <SP>
            Coding as a skill is a great asset to have and it shouldn't be a
            hassle to learn. I like to teach in a way that it's simple but
            effective, and also enjoyable.
          </SP>
        </Fade>
      </Grid>
    </Grid>
  )
}

export default About
