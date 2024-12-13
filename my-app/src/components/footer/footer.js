import styled from 'styled-components';

const FooterContainer = ({ className }) => {
	return (
		<div className={className}>
			<div>
				<div>По вопросам обращаться:</div>
				<div>lena.tormina2001@mail.ru</div>
			</div>
			<div>
				<div>
					{new Date().toLocaleTimeString('ru', {
						day: 'numeric',
						month: 'long',
					})}
				</div>
			</div>
		</div>
	);
};

export const Footer = styled(FooterContainer)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 50px;
	padding: 20px 40px;
	font-weight: 600;
	background-color: #fff;
	box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
`;
