import styled from 'styled-components';
import { Input, Icon } from '../../../../components';
import { SpecialPanel } from '../special-panel/special-panel';
import { useLayoutEffect, useRef, useState } from 'react';
import { sanitizeContent } from './utils';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { saveMaterialAsync } from '../../../../actions';
import { PROP_TYPE } from '../../../../constants';

const MaterialFormContainer = ({
	className,
	material: { id, title, imageUrl, taskUrl, answer, content, publishedAt },
}) => {
	const [imageUrlValue, setImageUrlValue] = useState(imageUrl);
	const [taskUrlValue, setTaskUrlValue] = useState(taskUrl);
	const [answerUrlValue, setAnswerUrlValue] = useState(answer);
	const [titleValue, setTitleValue] = useState(title);
	const contentRef = useRef(null);

	useLayoutEffect(() => {
		setImageUrlValue(imageUrl);
		setTaskUrlValue(taskUrl);
		setAnswerUrlValue(answer);
		setTitleValue(title);
	}, [imageUrl, taskUrl, answer, title]);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onSave = () => {
		const newContent = sanitizeContent(contentRef.current.innerHTML);

		dispatch(
			saveMaterialAsync(id, {
				imageUrl: imageUrlValue,
				taskUrl: taskUrlValue,
				answer: answerUrlValue,
				title: titleValue,
				content: newContent,
			}),
		).then(({ id }) => navigate(`/material/${id}`));
	};

	const onImageChange = ({ target }) => setImageUrlValue(target.value);
	const onTaskChange = ({ target }) => setTaskUrlValue(target.value);
	const onAnswerChange = ({ target }) => setAnswerUrlValue(target.value);
	const onTitleChange = ({ target }) => setTitleValue(target.value);
	return (
		<div className={className}>
			<Input
				value={imageUrlValue}
				placeholder="Изображение..."
				onChange={onImageChange}
			/>
			<Input
				value={titleValue}
				placeholder="Заголовок..."
				onChange={onTitleChange}
			/>
			<SpecialPanel
				id={id}
				publishedAt={publishedAt}
				margin="20px 0"
				editButton={
					<Icon id="fa-floppy-o" size="21px" margin="0" onClick={onSave} />
				}
			/>
			<div
				className="material-text"
				ref={contentRef}
				contentEditable={true}
				suppressContentEditableWarning={true}
			>
				{content}
			</div>
			<Input value={taskUrlValue} placeholder="Задача..." onChange={onTaskChange} />
			<Input
				value={answerUrlValue}
				placeholder="Ответ..."
				onChange={onAnswerChange}
			/>
		</div>
	);
};

export const MaterialForm = styled(MaterialFormContainer)`
	& img {
		float: left;
		margin: 0 20px 10px 0;
		width: 300px;
	}

	& .material-text {
		min-height: 120px;
		border: 1px solid #000;
		font-size: 18px;
		white-space: pre-line;
		background-color: #fff;
		border-radius: 8px;
		padding: 10px;
		margin: 0 0 10px;
	}
`;

MaterialForm.propTypes = {
	material: PROP_TYPE.MATERIAL.isRequired,
};
