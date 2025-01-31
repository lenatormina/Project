import styled from 'styled-components';
import { H2, H4, Icon } from '../../../../components';
import { SpecialPanel } from '../special-panel/special-panel';
import { useNavigate } from 'react-router-dom';
import { PROP_TYPE } from '../../../../constants';
import { useSelector } from 'react-redux';
import { selectUserRole } from '../../../../selectors';
import { ROLE } from '../../../../constants';
import { Button } from '../../../../components';
import { useState } from 'react';

const MaterialContentContainer = ({
	className,
	material: { id, title, imageUrl, taskUrl, answer, content, publishedAt },
}) => {
	const navigate = useNavigate();
	const userRole = useSelector(selectUserRole);
	const isAdmin = userRole === ROLE.ADMIN;
	const isGuest = userRole === ROLE.GUEST;

	const [showAnswer, setShowAnswer] = useState(false);
	const [buttonText, setButtonText] = useState('Проверить ответ');

	const handleCheckAnswer = () => {
		setShowAnswer((prev) => !prev);
		setButtonText((prev) =>
			prev === 'Проверить ответ' ? 'Скрыть ответ' : 'Проверить ответ',
		);
	};
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
			<H4>Задача:</H4>
			<img className="material-image" src={taskUrl} alt={title} />
			{isAdmin ? (
				<>
					<H4>Ответ:</H4>
					<div className="material-image">{answer}</div>
				</>
			) : !isGuest ? (
				<>
					<Button onClick={handleCheckAnswer}>{buttonText}</Button>
					{showAnswer && <div className="material-image">{answer}</div>}
				</>
			) : null}
		</div>
	);
};

export const MaterialContent = styled(MaterialContentContainer)`
	& img {
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
		margin: 20px 0;
	}

	& .material-image {
		max-width: 700px;
		display: block;
		margin: 20px auto;
		font-size: 18px;
		border: 1px solid #ddd;
		background-color: #fff;
		border-radius: 8px;
		padding: 10px;
		text-align: center;
	}

	& H2 {
		margin: 0;
	}
`;

MaterialContent.propTypes = {
	material: PROP_TYPE.MATERIAL.isRequired,
};
