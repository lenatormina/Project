import styled from 'styled-components';
import { H2, Icon } from '../../../../components';
import { SpecialPanel } from '../special-panel/special-panel';

const MaterialContentContainer = ({
	className,
	material: { title, imageUrl, content, publishedAt },
}) => {
	return (
		<div className={className}>
			<img src={imageUrl} alt={title} />
			<H2>{title}</H2>
			<SpecialPanel publishedAt={publishedAt} margin="-20px 0 20px" editButton = {
				<Icon
					id="fa-pencil-square-o"
					size="21px"
					margin="0 10px 0 0 "
					onClick={() => {}}
				/>
			} />
			<div className="material-text">{content}</div>
		</div>
	);
};

export const MaterialContent = styled(MaterialContentContainer)`
	& img {
		float: left;
		margin: 0 20px 10px 0;
		width: 300px;
	}

	& .material-text {
		font-size: 18px;
	}
`;
