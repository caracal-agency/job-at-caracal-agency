import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';

import { ChakraProvider } from '@chakra-ui/react';
import { round } from 'lodash';
import PropTypes from 'prop-types';

import theme from '_comps/Theme';

export default function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme}>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}

MyApp.propTypes = {
	Component: PropTypes.func.isRequired,
	pageProps: PropTypes.object.isRequired,
};

export function reportWebVitals(metric) {
	process.env.NODE_ENV === 'development' && console.log(`%c▲ Dune – ${metric.name}:`, 'font-weight: bold;', `${round(metric.value, 2)}ms`);
}
