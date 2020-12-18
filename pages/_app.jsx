import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from '@components/GlobalStyle'

			// async function supportsWebp() {
			// 	if (!self.createImageBitmap) return false;

			// 	const webpData =
			// 		"data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=";
			// 	const blob = await fetch(webpData).then((r) => r.blob());
			// 	return createImageBitmap(blob).then(
			// 		() => true,
			// 		() => false
			// 	);
			// }

			// (async () => {
			// 	var body = document.querySelector("body");
			// 	if (await supportsWebp()) {
			// 		body.classList.add("webp");
			// 	} else {
			// 		body.classList.add("no-webp");
			// 	}
			// })();
    
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
            break;
        case 'LCP':
            break;
        case 'CLS':
            break;
        case 'FID':
            break;
        case 'TTFB':
            break;
        case 'Next.js-hydration':
            break;
        case 'Next.js-route-change-to-render':
            break;
        case 'Next.js-render':
            break;
        default:
            break;
    }
}