import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { useEffect, useLayoutEffect, useState } from 'react';
import { MaterialContent, Comments, MaterialForm } from './components';
import { useMatch, useParams } from 'react-router-dom';
import { useServerRequest } from '../../hooks';
import { loadMaterialAsync, RESET_MATERIAL_DATA } from '../../actions';
import { selectMaterial } from '../../selectors';
import { Error } from '../../components';

const MaterialContainer = ({ className }) => {
	const [error, setError] = useState(true);
	const dispatch = useDispatch();
	const params = useParams();
	const [isLoading, setIsLoading] = useState(true);
	const isEditing = useMatch('/material/:id/edit');
	const isCreating = useMatch('/material');
	const requestServer = useServerRequest();
	const material = useSelector(selectMaterial);

	useLayoutEffect(() => {
		dispatch(RESET_MATERIAL_DATA);
	}, [dispatch, isCreating]);
	useEffect(() => {
		if (isCreating) {
			setIsLoading(false);
			return;
		}

		dispatch(loadMaterialAsync(requestServer, params.id)).then((materialData) => {
			setError(materialData.error);
			setIsLoading(false);
		});
	}, [dispatch, requestServer, params.id, isCreating]);

	if (isLoading) {
		return null;
	}

	return error ? (
		<Error error={error} />
	) : (
		<div className={className}>
			{isCreating || isEditing ? (
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
