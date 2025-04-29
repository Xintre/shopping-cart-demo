import { createTheme } from '@mui/material';

const fallback = [
	'-apple-system',
	'BlinkMacSystemFont',
	'"Segoe UI"',
	'Roboto',
	'"Helvetica Neue"',
	'Arial',
	'sans-serif',
];

export const theme = createTheme({
	typography: {
		fontFamily: ['var(--font-inconsolata)', ...fallback].join(','),
		button: {
			fontFamily: ['var(--font-playfair)', ...fallback].join(','),
		},
		h1: {
			fontFamily: ['var(--font-playfair)', ...fallback].join(','),
		},
		h2: {
			fontFamily: ['var(--font-playfair)', ...fallback].join(','),
		},
		h3: {
			fontFamily: ['var(--font-playfair)', ...fallback].join(','),
		},
	},
	palette: {
		mode: 'light',
		primary: {
			main: '#bcaaa4',
		},
		secondary: {
			main: '#5d4037',
		},
	},
});
