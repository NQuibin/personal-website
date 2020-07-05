import React from 'react'
import { Box, Container } from '@material-ui/core'

const PageContainer: React.FC = ({ children }) => {
  return (
    <Container disableGutters maxWidth="md">
      <Box
        display="flex"
        flexDirection="column"
        minHeight="100vh"
        textAlign="center"
      >
        <Box px={4.5} py={2.25}>
          {children}
        </Box>
      </Box>
    </Container>
  )
}

export default PageContainer
