import { ChakraProvider } from '@chakra-ui/react';
import PropTypes from 'prop-types';

import theme from '_comps/Theme';

const MyApp = ({ Component, pageProps }) => (
	<ChakraProvider theme={theme}>
		<Component {...pageProps} />
	</ChakraProvider>
);

MyApp.propTypes = {
	Component: PropTypes.func.isRequired,
	pageProps: PropTypes.object.isRequired,
};

export default MyApp;
