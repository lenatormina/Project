import styled from 'styled-components';
import { Input, Icon } from '../../../../components';
import { SpecialPanel } from '../special-panel/special-panel';
import { useRef } from 'react';
import { sanitizeContent } from './utils';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { saveMaterialAsync } from '../../../../actions';
import { useServerRequest } from '../../../../hooks';

const MaterialFormContainer = ({
	className,
	material: { id, title, imageUrl, content, publishedAt },
}) => {
	const imageRef = useRef(null);
	const titleRef = useRef(null);
	const contentRef = useRef(null);

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const requestServer = useServerRequest()

	const onSave = () => {
		const newImageUrl = imageRef.current.value;
		const newTitle = titleRef.current.value;
		const newContent = sanitizeContent(contentRef.current.innerHTML)

		dispatch(
			saveMaterialAsync(requestServer, {
				id,
				imageUrl: newImageUrl,
				title: newTitle,
				content: newContent
		})).then(() => navigate(`/material/${id}`))
	};

	return (
		<div className={className}>
			<Input ref = {imageRef} defaultValue = {imageUrl} placeholder="Изображение..." />
			<Input ref = {titleRef} defaultValue = {title} placeholder="Заголовок..."/>
			<SpecialPanel id = {id} publishedAt={publishedAt} margin="20px 0" editButton = {
				<Icon
					id="fa-floppy-o"
					size="21px"
					margin="0 10px 0 0 "
					onClick={onSave}
				/>
			} />
			<div 
				ref = {contentRef}
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
		font-size: 18px;
		white-space: pre-line;
	}
`;
