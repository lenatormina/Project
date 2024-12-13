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
		text-align: center;
		margin: 20px auto;
		width: 100%;
		display: block;
		border-radius: 8px;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
		border: 1px solid #ddd;
	}

	& .material-text {
		font-size: 18px;
		white-space: pre-line;
		border: 1px solid #ddd;
		background-color: #fff;
		border-radius: 8px;
		padding: 10px;
	}

	& H2 {
		margin: 0;
	}
`;

MaterialContent.propTypes = {
	material: PROP_TYPE.MATERIAL.isRequired,
};
