import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { useEffect, useLayoutEffect, useState } from 'react';
import { MaterialContent, Comments, MaterialForm } from './components';
import { useMatch, useParams } from 'react-router-dom';
import { loadMaterialAsync, RESET_MATERIAL_DATA } from '../../actions';
import { selectMaterial } from '../../selectors';
import { Error, PrivateContent } from '../../components';
import { ROLE } from '../../constants';

const MaterialContainer = ({ className }) => {
	const [error, setError] = useState(null);
	const dispatch = useDispatch();
	const params = useParams();
	const [isLoading, setIsLoading] = useState(true);
	const isEditing = !!useMatch('/material/:id/edit');
	const isCreating = !!useMatch('/material');
	const material = useSelector(selectMaterial);

	useLayoutEffect(() => {
		dispatch(RESET_MATERIAL_DATA);
	}, [dispatch, isCreating]);
	useEffect(() => {
		if (isCreating) {
			setIsLoading(false);
			return;
		}

		dispatch(loadMaterialAsync(params.id)).then((materialData) => {
			setError(materialData.error);
			setIsLoading(false);
		});
	}, [dispatch, params.id, isCreating]);

	if (isLoading) {
		return null;
	}

	const SpecificMaterialPage =
		isCreating || isEditing ? (
			<PrivateContent access={[ROLE.ADMIN]} serverError={error}>
				<div className={className}>
					<MaterialForm material={material} />
				</div>
			</PrivateContent>
		) : (
			<div className={className}>
				<MaterialContent material={material} />
				<Comments comments={material.comments} materialId={material.id} />
			</div>
		);

	return error ? <Error error={error} /> : SpecificMaterialPage;
};

export const Material = styled(MaterialContainer)`
	margin: 40px 0;
	padding: 0 80px;
`;
