import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Icon } from '../../../../components';

const RigthAlign = styled.div`
	display: flex;
	margin: 1px;
`;

const StyledLink = styled(Link)`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 15px;
	width: 100px;
	height: 32px;
	border: 1px solid #000;
	background-color: #eee;
	margin-top: -10px;
`;

const StyledButton = styled.div`
	&:hover {
		cursor: pointer;
	}
`;

const ControlPanelContainer = ({ className }) => {
	const navigate = useNavigate();

	return (
		<div className={className}>
			<RigthAlign>
				<StyledLink to="/login">Войти</StyledLink>
			</RigthAlign>
			<RigthAlign>
				<StyledButton onClick={() => navigate(-1)}>
					<Icon id="fa-backward" margin="3px 0 0 0" />
				</StyledButton>
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