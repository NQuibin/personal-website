import React from 'react'
import { ThemeProvider, CssBaseline, Fade } from '@material-ui/core'
import PageContainer from 'src/components/PageContainer'
import Header from 'src/components/Header'
import About from 'src/components/About'
import Experience from 'src/components/Experience'
import Footer from 'src/components/Footer'
import Divider from 'src/components/Divider'
import baseTheme from 'src/themes/baseTheme'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={baseTheme}>
      <CssBaseline />
      <Fade in timeout={800}>
        <div>
          <Header />
          <PageContainer>
            <About />
            <Divider />
            <Experience />
          </PageContainer>
          <Footer />
        </div>
      </Fade>
    </ThemeProvider>
  )
}

export default App
