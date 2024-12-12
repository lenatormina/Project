import styled from 'styled-components';
import { H2, Icon } from '../../../../components';
import { SpecialPanel } from '../special-panel/special-panel';
import { useNavigate } from 'react-router-dom';
import { PROP_TYPE } from '../../../../constants';

const MaterialContentContainer = ({
	className,
	material: { id, title, imageUrl, content, publishedAt },
}) => {
	const navigate = useNavigate();
	return (
		<div className={className}>
			<H2>{title}</H2>
			<SpecialPanel
				id={id}
				publishedAt={publishedAt}
				margin="-20px 0 20px"
				editButton={
					<Icon
						id="fa-pencil-square-o"
						size="21px"
						margin="0 10px 0 0 "
						onClick={() => navigate(`/material/${id}/edit`)}
					/>
				}
			/>
			<div className="material-text">{content}</div>
			<img src={imageUrl} alt={title} />
		</div>
	);
};

export const MaterialContent = styled(MaterialContentContainer)`
	& img {
		margin: 15px -55px 10px;
		width: 950px;
		display: block;
	}

	& .material-text {
		font-size: 18px;
		white-space: pre-line;
	}

	& H2 {
		margin: 0;
	}
`;

MaterialContent.propTypes = {
	material: PROP_TYPE.MATERIAL.isRequired,
};
