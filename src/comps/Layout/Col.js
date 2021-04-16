import { GridItem, forwardRef } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const Col = forwardRef((props, ref) => (
	// eslint-disable-next-line react/jsx-props-no-spreading
	<GridItem ref={ref} colStart={2} colEnd={[14, null, null, 26, null, null]} {...props}>
		{props.children}
	</GridItem>
));

Col.propTypes = {
	children: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),
};

Col.defaultProps = {
	children: {},
};

export default Col;
