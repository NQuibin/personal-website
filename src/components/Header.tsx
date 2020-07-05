import React from 'react'
import { Grid } from '@material-ui/core'
import styled from 'styled-components'

const SBrandHeader = styled.h1`
  margin: 0;
  font-family: 'Permanent Marker', cursive;
  font-size: 1.7rem;
  text-transform: uppercase;
`

const Header: React.FC = () => {
  return (
    <Grid container direction="row" alignItems="center" justify="space-between">
      <Grid item xs={12}>
        <SBrandHeader>Nikki Louis Quibin</SBrandHeader>
      </Grid>
    </Grid>
  )
}

export default Header
