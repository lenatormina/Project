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
	margin-top: -5px;
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;

const UserName = styled.div`
	font-size: 22px;
	font-weight: bold;
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
				{roleId === ROLE.GUEST ? (
					<Button>
						<Link to="/login">Войти</Link>
					</Button>
				) : (
					<>
						<UserName>{login}</UserName>

						<Icon
							id="fa-sign-out"
							margin="0 0 0 15px"
							onClick={() => dispatch(logout(session))}
						/>
					</>
				)}
			</RigthAlign>
			<RigthAlign>
				<Icon id="fa-backward" margin="5px 0 0 0" onClick={() => navigate(-1)} />

				<Link to="/material">
					<Icon id="fa-file-text-o" margin="5px 0 0 15px" />
				</Link>
				<Link to="/users">
					<Icon id="fa-users" margin="5px 0 0 15px" />
				</Link>
			</RigthAlign>
		</div>
	);
};

export const ControlPanel = styled(ControlPanelContainer)``;
