import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MaterialCard } from './components';
import { useServerRequest } from '../../hooks';

const MainContainer = ({ className }) => {
	const [materials, setMaterials] = useState([]);
	const requestServer = useServerRequest();

	useEffect(() => {
		requestServer('fetchMaterials').then((materials) => {
			setMaterials(materials.res);
		});
	}, [requestServer]);

	return (
		<div className={className}>
			{materials.map(({ id, title, publishedAt, commentsCount }) => (
				<MaterialCard
					key={id}
					id={id}
					title={title}
					publishedAt={publishedAt}
					commentsCount={commentsCount}
				/>
			))}
		</div>
	);
};

export const Main = styled(MainContainer)``;
