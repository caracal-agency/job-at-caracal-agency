import { useRouter } from 'next/router';

import Col from '_comps/Layout/Col';
import Container from '_comps/Layout/Container';

export default function Single() {
	const router = useRouter();

	return (
		<Container>
			<Col>
				<div>This should contain a form allowing editing of entries for {router.query.id}</div>
			</Col>
		</Container>
	);
}
