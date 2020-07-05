import React from 'react'
import { Grid } from '@material-ui/core'
import { SH2, SH3, SP } from 'src/components/Text'

const About: React.FC = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <SH2>Hello!</SH2>
        <SP>
          My name is Nikki and I'm a software developer based in Toronto,
          Canada. Coding is one of my favourite things to do since it allows me
          to build beautiful and awesome applications. I also enjoy teaching and
          helping others find the joys of coding.
        </SP>
      </Grid>
      <Grid item xs={12}>
        <SH2>I can help you with...</SH2>
      </Grid>
      <Grid item xs={12}>
        <SH3>Developing applications.</SH3>
        <SP>
          I focus mainly on web development, so I can help you create websites
          that is mobile-friendly and runs across multiple devices.
        </SP>
      </Grid>
      <Grid item xs={12}>
        <SH3>Learning how to code.</SH3>
        <SP>
          Coding as a skill is a great asset to have and it shouldn't be a
          hassle to learn. I like to teach in a way that it's simple but
          effective, and also enjoyable.
        </SP>
      </Grid>
    </Grid>
  )
}

export default About
