type ColProps = {
	children: React.ReactNode;
	rest?: any;
};

const Container = (props: ColProps) => (
	<div className="grid w-full grid-cols-container" {...props.rest}>
		{props.children}
	</div>
);

export default Container;
