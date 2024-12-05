import { Routes, Route } from 'react-router-dom';
import { Header, Footer, Modal } from './components';
import { Authorization, Registration, Users, Material } from './pages';
import styled from 'styled-components';
import { useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from './actions';

const AppColumn = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 1000px;
	min-height: 100%;
	margin: 0 auto;
	background: #fff;
`;

const Page = styled.div`
	padding: 120px 0 20px;
`;

export const App = () => {
	const dispatch = useDispatch();

	useLayoutEffect(() => {
		const currentUserDataJson = sessionStorage.getItem('userData');

		if (!currentUserDataJson) {
			return;
		}

		const currentUserData = JSON.parse(currentUserDataJson);

		dispatch(
			setUser({
				...currentUserData,
				roleId: Number(currentUserData.roleId),
			}),
		);
	}, [dispatch]);
	return (
		<AppColumn>
			<Header />
			<Page>
				<Routes>
					<Route path="/" element={<div>Главная страница</div>} />
					<Route path="/login" element={<Authorization />} />
					<Route path="/register" element={<Registration />} />
					<Route path="/users" element={<Users />} />
					<Route path="/material" element={<div>Новый материал</div>} />
					<Route path="/material/:id" element={<Material />} />
					<Route path="*" element={<div>Ошибка</div>} />
				</Routes>
			</Page>
			<Footer />
			<Modal />
		</AppColumn>
	);
};
