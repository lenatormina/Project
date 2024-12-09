import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MaterialCard, Pagination } from './components';
import { useServerRequest } from '../../hooks';
import { PAGINATION_LIMIT } from '../../constants';

const MainContainer = ({ className }) => {
	const [materials, setMaterials] = useState([]);
	const [page, setPage] = useState(1);
	const [lastPage, setLastPage] = useState(1);
	const requestServer = useServerRequest();

	useEffect(() => {
		requestServer('fetchMaterials', page, PAGINATION_LIMIT).then(
			({ materials, links }) => {
				setMaterials(materials.res);
				setLastPage(2);
			},
		);
	}, [requestServer, page]);

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
			{lastPage > 1 && (
				<Pagination page={page} lastPage={lastPage} setPage={setPage} />
			)}
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
