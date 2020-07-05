import React from 'react'
import { ThemeProvider, CssBaseline } from '@material-ui/core'
import PageContainer from 'src/components/PageContainer'
import Header from 'src/components/Header'
import About from 'src/components/About'
import Experience from 'src/components/Experience'
import Footer from 'src/components/Footer'
import baseTheme from 'src/themes/baseTheme'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={baseTheme}>
      <CssBaseline />
      <PageContainer>
        <Header />
        <About />
        <Experience />
        <Footer />
      </PageContainer>
    </ThemeProvider>
  )
}

export default App
