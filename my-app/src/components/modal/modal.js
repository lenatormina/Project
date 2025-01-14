import styled from 'styled-components';
import { Button } from '../button/button';
import { useSelector } from 'react-redux';
import {
	selectModalOnCancel,
	selectModalOnConfirm,
	selectModalText,
	selectModalIsOpen,
} from '../../selectors';

const ModalContainer = ({ className }) => {
	const isOpen = useSelector(selectModalIsOpen);
	const text = useSelector(selectModalText);
	const onConfirm = useSelector(selectModalOnConfirm);
	const onCancel = useSelector(selectModalOnCancel);

	if (!isOpen) {
		return null;
	}

	return (
		<div className={className}>
			<div className="overlay"></div>
			<div className="box">
				<h3>{text}</h3>
				<div className="buttons">
					<Button width="120px" onClick={onConfirm}>
						Да
					</Button>
					<Button width="120px" onClick={onCancel}>
						Отмена
					</Button>
				</div>
			</div>
		</div>
	);
};

export const Modal = styled(ModalContainer)`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 20;

	& .overlay {
		position: absolute;
		background-color: rgba(0, 0, 0, 0.7);
		width: 100%;
		height: 100%;
	}

	& .box {
		position: relative;
		width: 400px;
		margin: 0 auto;
		padding: 20px;
		top: 50%;
		transform: translateY(-50%);
		z-index: 30;
		background-color: #fff;
		border-radius: 8px;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
		text-align: center;
	}

	& .buttons {
		display: flex;
		justify-content: center;
		margin-top: 20px;
	}

	& .buttons button {
		margin: 0 5px;
	}
`;
