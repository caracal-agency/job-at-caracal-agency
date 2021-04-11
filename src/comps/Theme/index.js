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
