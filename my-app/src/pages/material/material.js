import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { useEffect } from 'react';
import { MaterialContent, Comments, MaterialForm } from './components';
import { useMatch, useParams } from 'react-router-dom';
import { useServerRequest } from '../../hooks';
import { loadMaterialAsync } from '../../actions';
import { selectMaterial } from '../../selectors';

const MaterialContainer = ({ className }) => {
	const dispatch = useDispatch();
	const params = useParams();
	const isEditing = useMatch('/material/:id/edit');
	const requestServer = useServerRequest();
	const material = useSelector(selectMaterial);
	useEffect(() => {
		dispatch(loadMaterialAsync(requestServer, params.id));
	}, [dispatch, requestServer, params.id]);

	return (
		<div className={className}>
		{isEditing ? (
			<MaterialForm material={material} />
		) : ( 
			<>
				<MaterialContent material={material} />
				<Comments comments={material.comments} materialId={material.id} />
			</>
		)}
		</div>
	);
};

export const Material = styled(MaterialContainer)`
	margin: 40px 0;
	padding: 0 80px;
`;
