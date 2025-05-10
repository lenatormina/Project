import styled from 'styled-components';
import PropTypes from 'prop-types';

const H2Container = ({ children, className }) => (
	<h2 className={className}>{children}</h2>
);

export const H2 = styled(H2Container)`
	margin: 40px 0 20px;
	text-align: center;
	font-size: 2rem;
`;

H2.propTypes = {
	children: PropTypes.node.isRequired,
};
