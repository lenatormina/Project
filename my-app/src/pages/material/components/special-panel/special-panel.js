import styled from 'styled-components';
import { Icon } from '../../../../components';
import { useDispatch } from 'react-redux';
import { openModal, CLOSE_MODAL, removeMaterialAsync } from '../../../../actions';
import { useServerRequest } from '../../../../hooks';
import { useNavigate } from 'react-router-dom';

const SpecialPanelContainer = ({className, id, publishedAt, editButton}) => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const requestServer = useServerRequest()
	const onMaterialRemove = (id) => {
			dispatch(openModal({
				text: 'Удалить материал?',
				onConfirm: ()=>{
					dispatch(removeMaterialAsync(requestServer, id)).then(()=>{
						navigate('/');
					});
					dispatch(CLOSE_MODAL);
				},
				onCancel: () => dispatch(CLOSE_MODAL)
			}))
		};
    return (
        <div className={className}>
				<div className="published-at">
				{publishedAt && 
				(<Icon inactive={true} id="fa-calendar-o"
						margin="0 7px 0 0"
						size="18px"
					/>
				)}
					{publishedAt}
				</div>
				<div className="buttons">
                    {editButton}
					{publishedAt && (
						<Icon id="fa-trash-o" size="21px" margin="0 0 0 7px" onClick={() => onMaterialRemove(id)} />
					)}
				</div>
			</div>
    )
}

export const SpecialPanel = styled(SpecialPanelContainer)`
    display: flex;
    justify-content: space-between;
    margin: ${({margin}) => margin };

    & .published-at {
		display: flex;
		font-size: 18px;
	}

    & .buttons {
		display: flex;
	}

	& i {
		position: relative;
		top: -1px;
	}
`;