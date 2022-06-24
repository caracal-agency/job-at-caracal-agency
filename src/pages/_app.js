import { ChakraProvider } from '@chakra-ui/react';

import theme from '_comps/Theme';

export default function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme}>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}
