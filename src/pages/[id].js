import { Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import Col from '_comps/Layout/Col';
import Container from '_comps/Layout/Container';

export default function Single() {
	const router = useRouter();

	return (
		<Container>
			<Col>
				<Text>Single entry page for {router.query.id}</Text>
			</Col>
		</Container>
	);
}

export async function getServerSideProps() {
	return {
		props: {},
	};
}
