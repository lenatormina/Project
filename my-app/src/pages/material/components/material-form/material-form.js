import styled from 'styled-components';
import { Input, Icon } from '../../../../components';
import { SpecialPanel } from '../special-panel/special-panel';

const MaterialFormContainer = ({
	className,
	material: { id, title, imageUrl, content, publishedAt },
}) => {
	return (
		<div className={className}>
			<Input defaultValue = {imageUrl} />
			<Input defaultValue = {title} />
			<SpecialPanel publishedAt={publishedAt} margin="20px 0" editButton = {
				<Icon
					id="fa-floppy-o"
					size="21px"
					margin="0 10px 0 0 "
					onClick={() => {}}
				/>
			} />
			<div 
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
