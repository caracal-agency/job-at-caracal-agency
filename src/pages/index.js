import { Heading, Image } from '@chakra-ui/react';

import Container from '_comps/Layout/Container';
import Col from '_comps/Layout/Col';

const Home = () => (
	<Container h="100vh" alignItems="center">
		<Col colStart={2} colEnd={[26, null, null, 12]}>
			<Heading as="h1" fontSize="6xl">
				Hello world
			</Heading>
		</Col>

		<Col colStart={[2, null, null, 13]} colEnd={26}>
			<Image src="/logo_caracal-studio.svg" alt="Caracal Studio’s logo" maxWidth="200" my={8} />
		</Col>
	</Container>
);

export default Home;
