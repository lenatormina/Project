import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { MaterialCard } from '../main/components';
import { H2 } from '../../components';

const BookmarksContainer = ({ className }) => {
	const bookmarks = useSelector((state) => state.bookmark.bookmarks);

	return (
		<div className={className}>
			<H2>Закладки</H2>
			<div className="bookmark-list">
				{bookmarks.length === 0 ? (
					<p>Нет добавленных закладок</p>
				) : (
					bookmarks.map(({ material }) => (
						<MaterialCard
							key={material._id}
							id={material._id}
							title={material.title}
							imageUrl={material.image}
							taskUrl={material.taskUrl}
							answer={material.answer}
							publishedAt={new Date(
								material.createdAt,
							).toLocaleDateString()}
						/>
					))
				)}
			</div>
		</div>
	);
};

export const Bookmarks = styled(BookmarksContainer)`
	.bookmark-list {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
`;
