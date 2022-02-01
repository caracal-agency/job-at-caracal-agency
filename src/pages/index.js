import { Heading, Image } from '@chakra-ui/react';

import Container from '_comps/Layout/Container';
import Col from '_comps/Layout/Col';

const Home = () => (
	<Container h="100vh" alignItems="center">
		<Col colStart={2} colEnd={26} textAlign="center">
			<Heading as="h1" fontSize="6xl">
				Hello world
			</Heading>

			<Image src="/logo_caracal-studio.svg" alt="Caracal Studio’s logo" maxWidth="200" my={8} d="inline" />
		</Col>
	</Container>
);

export default Home;

export async function getStaticProps() {
	// ? fetch data from process.env.NEXT_PUBLIC_WORDPRESS_URL and pass the content to the page via props

	return {
		props: {
			// ? add your fetched data here
		},
	};
}
