import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/
a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:'';content:none}table{border-collapse:collapse;border-spacing:0}
/* Reset end */

/* CSS Variables */

@font-face {
  font-family: 'Nunito Sans';
  src: url('/NunitoSans-Regular.ttf') format('woff');
  font-style: normal;
  font-weight: 400;
}

@font-face {
  font-family: 'Nunito Sans Light';
  src: url('/NunitoSans-EXTRALight.ttf') format('woff');
  font-style: normal;
  font-weight: 200;
}

:root {
	--color-background: #fafafa;
	--color-text: #666;
	--color-highlight: #333;
	--color-link: var(--color-text);
	--color-link-hover: #111;
}

@media (prefers-color-scheme: dark) {
	:root {
		--color-background: #282c37;
		--color-text: #848d96;
		--color-highlight: #eee;
		--color-link: var(--color-text);
		--color-link-hover: #fafafa;
	}
}

/* Base */
* {
	margin: 0;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-rendering: optimizeSpeed;
	font-feature-settings: "liga";
	-moz-font-feature-settings: "liga" on;
}

@keyframes fadeIn {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}

body {
	animation: fadeIn 2s;
	background-color: var(--color-background);
	color: var(--color-text);
	font-family: "Nunito Sans", sans-serif;
	font-size: 16px;
	font-weight: 400;
	line-height: 1.5;
}
`;

export const theme = {
	colors: {
	  primary: '#0070f3',
	},
  }