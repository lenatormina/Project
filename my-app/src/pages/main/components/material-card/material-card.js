import styled from 'styled-components';
import { Icon } from '../../../../components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MaterialCardContainer = ({
	className,
	id,
	title,
	imageUrl,
	publishedAt,
	commentsCount,
}) => {
	return (
		<div className={className}>
			<Link to={`/material/${id}`}>
				<img src={imageUrl} alt={title} />
				<div className="material-card-footer">
					<h4>{title}</h4>
					<div className="material-card-info">
						<div className="published-at">
							<Icon
								inactive={true}
								id="fa-calendar-o"
								margin="0 7px 0 0"
								size="18px"
							/>
							<div className="published-and-comments">{publishedAt}</div>
						</div>
						<div className="comments-count">
							<Icon
								inactive={true}
								id="fa-comment-o"
								margin="0 7px 0 0"
								size="18px"
							/>
							<div className="published-and-comments">{commentsCount}</div>
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
};

export const MaterialCard = styled(MaterialCardContainer)`
	display: flex;
	flex-direction: column;
	width: 280px;
	margin: 20px;
	border: 1px solid #ddd;
	border-radius: 8px;
	overflow: hidden;

	box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
	transition: transform 0.2s;

	& img {
		width: 100%;
		height: 150px;
		object-fit: cover;
	}

	& .material-card-footer {
		padding: 10px;
		border-top: 1px solid #ddd;
		background-color: rgb(239, 207, 207);
	}

	& h4 {
		margin: 0;
		font-size: 1.2rem;
		color: #333;
	}

	& .material-card-info {
		display: flex;
		justify-content: space-between;
		margin-top: 5px;
		font-size: 0.9rem;
		color: #666;
	}

	& .published-at {
		display: flex;
		font-size: 16px;
	}

	& .comments-count {
		display: flex;
	}

	.published-and-comments {
		display: flex;
		align-items: center;
	}

	&:hover {
		transform: scale(1.02);
	}
`;

MaterialCard.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	imageUrl: PropTypes.string.isRequired,
	publishedAt: PropTypes.string.isRequired,
	commentsCount: PropTypes.number.isRequired,
};
