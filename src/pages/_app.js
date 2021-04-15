import { ChakraProvider } from '@chakra-ui/react';
import PropTypes from 'prop-types';

import theme from '_comps/Theme';

import 'swiper/swiper.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/components/navigation/navigation.scss';

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
