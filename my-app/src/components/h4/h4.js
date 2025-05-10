import styled from 'styled-components';
import PropTypes from 'prop-types';

const H4Container = ({ children, className }) => (
	<h4 className={className}>{children}</h4>
);

export const H4 = styled(H4Container)`
	margin: 20px 0 20px;
	text-align: center;
	font-size: 1.5rem;
`;

H4.propTypes = {
	children: PropTypes.node.isRequired,
};
