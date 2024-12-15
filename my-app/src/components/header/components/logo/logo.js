import { Link } from 'react-router-dom';
import { Icon } from '../../../../components';
import styled from 'styled-components';

const LargeText = styled.div`
	font-size: 48px;
	font-weight: 600;
	line-height: 48px;
	margin-top: 13px;
`;

const SmallText = styled.div`
	font-size: 18px;
	font-weight: bold;
`;

const LogoContainer = ({ className }) => (
	<Link className={className} to="/">
		<Icon id="fa-cubes" size="70px" margin="0px 10px 0 0" />
		<div>
			<LargeText>Теория</LargeText>
			<SmallText>по математике</SmallText>
		</div>
	</Link>
);

export const Logo = styled(LogoContainer)`
	display: flex;
	margin-top: -25px;
`;
