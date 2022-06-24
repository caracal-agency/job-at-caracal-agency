import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

import Button from './Button';

// ? https://chakra-ui.com/docs/theming/theme#typography
const fonts = {};

// ? https://chakra-ui.com/docs/theming/theme#breakpoints
const breakpoints = ['576px', '768px', '992px', '1200px', '1440px'];
breakpoints.base = '0px';
breakpoints.sm = '576px';
breakpoints.md = '768px';
breakpoints.lg = '992px';
breakpoints.xl = '1200px';
breakpoints.xxl = '1440px';

// ? https://chakra-ui.com/docs/theming/theme#colors
const colors = {};

// ? https://chakra-ui.com/docs/theming/theme#spacing
const space = {};

// ? https://chakra-ui.com/docs/features/color-mode
const config = {
	initialColorMode: 'light',
	useSystemColorMode: false,
};

const theme = extendTheme({
	fonts,
	breakpoints,
	colors,
	space,
	config,
	styles: {
		global: (props) => ({
			':root': {
				// ? date picker
				'--duet-color-primary': '#005fcc',
				'--duet-color-text': '#333',
				'--duet-color-text': 'ctive: #fff',
				'--duet-color-placeholder': '#666',
				'--duet-color-button': '#f5f5f5',
				'--duet-color-surface': '#fff',
				'--duet-color-overlay': 'rgba(0, 0, 0, 0.8)',
				'--duet-color-border': '#333',
				'--duet-font': '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
				'--duet-font-normal': 400,
				'--duet-font-bold': 600,
				'--duet-radius': '4px',
				'--duet-z-index': 600,
			},
			body: {
				fontFamily: 'body',
				color: mode('gray.800', 'whiteAlpha.900')(props),
				bg: mode('white', 'gray.800')(props),
				lineHeight: 'base',
			},
		}),
	},
	components: {
		Button,
	},
});

export default theme;

// ? https://chakra-ui.com/docs/theming/customize-theme
