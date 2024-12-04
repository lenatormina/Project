import styled from 'styled-components';
import { Button } from '../button/button';
import { useSelector } from 'react-redux';
import { selectModalOnCancel, selectModalOnConfirm, selectModalText, selectModalIsOpen} from '../../selectors';

const ModalContainer = ({ className }) => {
    const text = useSelector()
    const onConfirm = useSelector()
    const onCancel = useSelector()

    return (
        <div className={className}>
            <div className="overlay"></div>
            <div className="box">
                <h3>{text}</h3>
                <div className ='buttons'>
                    <Button width='120px' onClick={onConfirm}>Да</Button>
                    <Button width='120px' onClick={onCancel}>Отмена</Button>
                </div>
            </div>
        </div>
    )
}

export const Modal = styled(ModalContainer)`` 