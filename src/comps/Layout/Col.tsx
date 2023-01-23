import classnames from 'classnames';

type ColProps = {
	children: React.ReactNode;
	className?: string;
	colStart?: number | (number | null)[];
	colEnd?: number | (number | null)[];
};

const Col = ({ children, className, colStart, colEnd }: ColProps) => {
	const defaultColStart = 2;
	const defaultColEnd = 26;

	let styles = 'grid';

	styles = classnames(styles, className);

	if (typeof colStart === 'number') {
		styles = classnames(styles, `col-start-${colStart}`);
	} else if (Array.isArray(colStart)) {
		colStart.forEach((value, index) => {
			if (value != null) {
				styles = classnames(styles, `${getBreakpoint(index)}col-start-${value}`);
			}
		});
	} else {
		styles = classnames(styles, `col-start-${defaultColStart}`);
	}

	if (typeof colEnd === 'number') {
		styles = classnames(styles, `col-end-${colEnd}`);
	} else if (Array.isArray(colEnd)) {
		colEnd.forEach((value, index) => {
			if (value != null) {
				// Skip the breaking point if the value is null
				if (value === null) {
					return;
				}
				styles = classnames(styles, `${getBreakpoint(index)}col-end-${value}`);
			}
		});
	} else {
		styles = classnames(styles, `col-end-${defaultColEnd}`);
	}

	return <div className={styles}>{children}</div>;
};

export default Col;

const breakpointPrefixes = ['', 'sm:', 'md:', 'lg:', 'xl:', '2xl:'];
const getBreakpoint = (index: number) => {
	return breakpointPrefixes[index];
};
