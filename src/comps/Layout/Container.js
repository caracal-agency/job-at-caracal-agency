import { Grid } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const Container = ({ children, ...rest }) => (
	<Grid
		w="100%"
		templateColumns="[full-start] minmax(calc(calc(100% - 1440px) / 2), 1fr) [main-start] repeat(24, [col-start] 1fr) [main-end] minmax(calc(calc(100% - 1440px) / 2), 1fr) [full-end]"
		{...rest} // eslint-disable-line react/jsx-props-no-spreading
	>
		{children}
	</Grid>
);

Container.propTypes = {
	children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

Container.defaultProps = {
	children: {},
};

export default Container;
