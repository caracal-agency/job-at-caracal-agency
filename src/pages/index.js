import Col from '_comps/Layout/Col';
import Container from '_comps/Layout/Container';

export default function Dashboard() {
	return (
		<Container>
			<Col>
				<div>This should contain the dashboard</div>
			</Col>
		</Container>
	);
}

export async function getStaticProps() {
	// ? fetch data from process.env.NEXT_PUBLIC_WORDPRESS_URL and pass the content to the page via props

	return {
		props: {
			// ? add your fetched data here
		},
	};
}
