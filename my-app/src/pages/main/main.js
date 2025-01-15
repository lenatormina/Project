import { useEffect, useState, useMemo } from 'react';
import styled from 'styled-components';
import { MaterialCard, Pagination, Search } from './components';
import { PAGINATION_LIMIT } from '../../constants';
import { debounce } from './utils';
import { request } from '../../utils/request';

const MainContainer = ({ className }) => {
	const [materials, setMaterials] = useState([]);
	const [page, setPage] = useState(1);
	const [lastPage, setLastPage] = useState(1);
	const [searchPhrase, setSearchPhrase] = useState('');
	const [shouldSearch, setShouldSearch] = useState(false);

	useEffect(() => {
		request(
			`/materials?search=${searchPhrase}&page=${page}&limit=${PAGINATION_LIMIT}`,
		).then(({ data: { materials, lastPage } }) => {
			setMaterials(materials);
			setLastPage(lastPage);
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [page, shouldSearch]);

	const startDelayedSearch = useMemo(() => debounce(setShouldSearch, 2000), []);

	const onSearch = ({ target }) => {
		setSearchPhrase(target.value);
		startDelayedSearch(!shouldSearch);
	};

	return (
		<div className={className}>
			<div className="materials-and-search">
				<Search searchPhrase={searchPhrase} onChange={onSearch} />
				{materials.length > 0 ? (
					<div className="material-list">
						{materials.map(
							({ id, title, imageUrl, publishedAt, comments }) => (
								<MaterialCard
									key={id}
									id={id}
									title={title}
									imageUrl={imageUrl}
									publishedAt={publishedAt}
									commentsCount={comments.length}
								/>
							),
						)}
					</div>
				) : (
					<div className="no-materials-found">Материалы не найдены</div>
				)}
			</div>
			{lastPage > 1 && materials.length > 0 && (
				<Pagination page={page} lastPage={lastPage} setPage={setPage} />
			)}
		</div>
	);
};

export const Main = styled(MainContainer)`
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	& .material-list {
		justify-content: center;
		display: flex;
		flex-wrap: wrap;
		padding: 20px 20px 80px;
	}

	& .no-materials-found {
		margin: 20px auto;
		text-align: center;
		font-size: 20px;
	}
`;
