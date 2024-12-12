import styled from 'styled-components';

const LoaderContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh; /* Занимает всю высоту экрана */
`;

const Spinner = styled.div`
	border: 8px solid #f3f3f3; /* Цвет фона */
	border-top: 8px solid #3498db; /* Цвет спиннера */
	border-radius: 50%;
	width: 60px; /* Ширина спиннера */
	height: 60px; /* Высота спиннера */
	animation: spin 1s linear infinite;

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;

export const Loader = () => (
	<LoaderContainer>
		<Spinner />
	</LoaderContainer>
);
