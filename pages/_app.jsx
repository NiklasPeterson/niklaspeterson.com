import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from '@/components/GlobalStyle'
import { Analytics } from '@vercel/analytics/react';

function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <Analytics />
      </ThemeProvider>
    </>
  )
}
export default App