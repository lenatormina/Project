import styled from 'styled-components';
import { Input } from '../../../../components';
import PropTypes from 'prop-types';

const SearchContainer = ({
	className,
	searchPhrase,
	onChange,
	sortOption,
	onSortChange,
	topic,
	onTopicChange,
}) => {
	return (
		<div className={className}>
			<select value={topic} onChange={onTopicChange}>
				<option value="">Все темы</option>
				<option value="Алгебра">Алгебра</option>
				<option value="Геометрия">Геометрия</option>
			</select>
			<Input
				value={searchPhrase}
				placeholder="Поиск по заголовкам..."
				onChange={onChange}
			/>

			<select value={sortOption} onChange={onSortChange}>
				<option value="alphabetical">В алфавитном порядке</option>
				<option value="newest">Сначала новые</option>
				<option value="oldest">Сначала старые</option>
			</select>
		</div>
	);
};

export const Search = styled(SearchContainer)`
	display: flex;
	position: relative;
	width: 700px;
	height: 40px;
	margin: 40px auto 0;

	select {
		width: ${({ width = '100%' }) => width};
		height: 40px;
		margin: 0 10px 10px;
		padding: 9px;
		font-size: 18px;
		border: 1px solid #000;
		border-radius: 8px;
	}

	& > input {
		padding: 10px 32px 10px 10px;
	}

	& > select {
		margin-left: 10px;
	}

	& > div {
		position: absolute;
		top: 7px;
		right: 9px;
	}
`;
Search.propTypes = {
	searchPhrase: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	sortOption: PropTypes.string.isRequired,
	onSortChange: PropTypes.func.isRequired,
	topic: PropTypes.string.isRequired,
	onTopicChange: PropTypes.func.isRequired,
};
