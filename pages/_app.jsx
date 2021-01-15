import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from '@components/GlobalStyle'

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export function reportWebVitals(metric) {
  switch (metric.name) {
    case 'FCP':
      break
    case 'LCP':
      break
    case 'CLS':
      break
    case 'FID':
      break
    case 'TTFB':
      break
    case 'Next.js-hydration':
      break
    case 'Next.js-route-change-to-render':
      break
    case 'Next.js-render':
      break
    default:
      break
  }
}
