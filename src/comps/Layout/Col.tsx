import { clsx } from 'clsx';

type ColProps = {
	children: React.ReactNode;
	colStart?: number | number[];
	colEnd?: number | number[];
};

const Col = ({ children, colStart, colEnd }: ColProps) => {
	const defaultColStart = 2;
	const defaultColEnd = 26;

	let className = 'grid';

	if (typeof colStart === 'number') {
		className = clsx(className, `col-start-${colStart}`);
	} else if (Array.isArray(colStart)) {
		colStart.forEach((value, index) => {
			if (value != null) {
				className = clsx(className, `${getBreakpoint(index)}:col-start-${value}`);
			}
		});
	} else {
		className = clsx(className, `col-start-${defaultColStart}`);
	}

	if (typeof colEnd === 'number') {
		className = clsx(className, `col-end-${colEnd}`);
	} else if (Array.isArray(colEnd)) {
		colEnd.forEach((value, index) => {
			if (value != null) {
				className = clsx(className, `${getBreakpoint(index)}:col-end-${value}`);
			}
		});
	} else {
		className = clsx(className, `col-end-${defaultColEnd}`);
	}

	return <div className={className}>{children}</div>;
};

export default Col;

const getBreakpoint = (index: number) => {
	switch (index) {
		case 0:
			return 'xs';
		case 1:
			return 'sm';
		case 2:
			return 'md';
		case 3:
			return 'lg';
		case 4:
			return 'xl';
		case 5:
			return '2xl';
		default:
			return '';
	}
};
