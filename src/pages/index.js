import { Flex, Heading, Image } from '@chakra-ui/react';

const Home = () => {
	return (
		<Flex w="100vw" h="100vh" alignItems="center" justifyContent="center" flexDirection="column">
			<Heading as="h1" fontSize="6xl">
				Hello world
			</Heading>

			<Image src="/logo_caracal-studio.svg" alt="Caracal Studio’s logo" maxWidth="200" my={8} />
		</Flex>
	);
};

export default Home;
