import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Button, Icon } from '../../../../components';
import { ROLE } from '../../../../constans';
import {
	selectUserRole,
	selectUserLogin,
	selectUserSession,
} from '../../../../selectors';
import { logout } from '../../../../action';

const RigthAlign = styled.div`
	display: flex;
	margin: 1px;
`;

const StyledIcon = styled.div`
	&:hover {
		cursor: pointer;
	}
`;

const ControlPanelContainer = ({ className }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const roleId = useSelector(selectUserRole);
	const login = useSelector(selectUserLogin);
	const session = useSelector(selectUserSession);

	return (
		<div className={className}>
			<RigthAlign>
				<Button>
					{roleId === ROLE.GUEST ? (
						<Link to="/login">Войти</Link>
					) : (
						<>
							<div>{login}</div>
							<StyledIcon onClick={() => dispatch(logout(session))}>
								<Icon id="fa-sign-out" margin="3px 0 0 0" />
							</StyledIcon>
						</>
					)}
				</Button>
			</RigthAlign>
			<RigthAlign>
				<StyledIcon onClick={() => navigate(-1)}>
					<Icon id="fa-backward" margin="3px 0 0 0" />
				</StyledIcon>
				<Link to="/material">
					<Icon id="fa-file-text-o" margin="3px 0 0 15px" />
				</Link>
				<Link to="/users">
					<Icon id="fa-users" margin="3px 0 0 15px" />
				</Link>
			</RigthAlign>
		</div>
	);
};

export const ControlPanel = styled(ControlPanelContainer)``;
