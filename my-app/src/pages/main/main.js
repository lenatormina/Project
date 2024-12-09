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
			<div className="material-list">
				{materials.map(({ id, title, imageUrl, publishedAt, commentsCount }) => (
					<MaterialCard
						key={id}
						id={id}
						title={title}
						imageUrl={imageUrl}
						publishedAt={publishedAt}
						commentsCount={commentsCount}
					/>
				))}
			</div>
		</div>
	);
};

export const Main = styled(MainContainer)`
	& .material-list {
		display: flex;
		flex-wrap: wrap;
		padding: 20px;
	}
`;
