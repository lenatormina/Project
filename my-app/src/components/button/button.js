import styled from 'styled-components';
import PropTypes from 'prop-types';
const ButtonContainer = ({ children, className, width, ...props }) => {
	return (
		<button className={className} {...props}>
			{children}
		</button>
	);
};

export const Button = styled(ButtonContainer)`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 20px;
	width: ${({ width = '100%' }) => width};
	height: 30px;
	border: none;
	border-radius: 5px;
	background-color: rgb(159, 91, 172);
	transition: background-color 0.3s ease;

	&:hover {
		background-color: rgb(98, 163, 187);
		cursor: pointer;
	}

	&:disabled {
		background-color: #ccc;
		cursor: not-allowed;
	}
`;

Button.propTypes = {
	children: PropTypes.node.isRequired,
	width: PropTypes.string,
};
