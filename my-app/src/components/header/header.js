import { ControlPanel, Logo } from './components';
import styled from 'styled-components';

const Discription = styled.div`
	font-style: italic;
	justify-self: center;
	align-self: center;
	font-size: 20px;
`;

const HeaderConteiner = ({ className }) => (
	<header className={className}>
		<Logo />
		<Discription>
			В простых и <br />
			понятных схемах
		</Discription>
		<ControlPanel />
	</header>
);

export const Header = styled(HeaderConteiner)`
	display: flex;
	justify-content: space-between;
	position: fixed;
	top: 0;
	width: 100%;
	height: 90px;
	padding: 20px 40px;
	background-color: #fff;
	box-shadow: 0px -2px 17px #000;
	z-index: 10;
`;
