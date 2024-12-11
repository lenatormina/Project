import styled from 'styled-components';
import { Input, Icon } from '../../../../components';
import { SpecialPanel } from '../special-panel/special-panel';
import { useLayoutEffect, useRef, useState } from 'react';
import { sanitizeContent } from './utils';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { saveMaterialAsync } from '../../../../actions';
import { useServerRequest } from '../../../../hooks';
import PropTypes from 'prop-types';

const MaterialFormContainer = ({
	className,
	material: { id, title, imageUrl, content, publishedAt },
}) => {
	const [imageUrlValue, setImageUrlValue] = useState(imageUrl);
	const [titleValue, setTitleValue] = useState(title);
	const contentRef = useRef(null);

	useLayoutEffect(() => {
		setImageUrlValue(imageUrl);
		setTitleValue(title);
	}, [imageUrl, title]);

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const requestServer = useServerRequest();

	const onSave = () => {
		const newContent = sanitizeContent(contentRef.current.innerHTML);

		dispatch(
			saveMaterialAsync(requestServer, {
				id,
				imageUrl: imageUrlValue,
				title: titleValue,
				content: newContent,
			}),
		).then(({ id }) => navigate(`/material/${id}`));
	};

	const onImageChange = ({ target }) => setImageUrlValue(target.value);
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
					<Icon
						id="fa-floppy-o"
						size="21px"
						margin="0 10px 0 0 "
						onClick={onSave}
					/>
				}
			/>
			<div
				ref={contentRef}
				contentEditable={true}
				suppressContentEditableWarning={true}
				className="material-text"
			>
				{content}
			</div>
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
		min-height: 80px;
		border: 1px solid #000;
		font-size: 18px;
		white-space: pre-line;
	}
`;
