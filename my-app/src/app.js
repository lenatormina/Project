import { Routes, Route } from 'react-router-dom';
import { Header, Footer, Modal, Error, Loader } from './components';
import { Authorization, Registration, Users, Material, Main } from './pages';
import styled from 'styled-components';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from './actions';
import { showLoader, hideLoader } from './actions';

import { ERROR } from './constants';

const AppColumn = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	position: relative;
	width: 100%;
	min-height: 100%;
	margin: 0 auto;
	background: #eee;
`;

const Page = styled.div`
	padding: 90px 0 20px;
	width: 100%;
`;

export const App = () => {
	const dispatch = useDispatch();
	const isLoading = useSelector((state) => state.loader.isLoading);

	useEffect(() => {
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

	useEffect(() => {
		dispatch(showLoader());

		const timer = setTimeout(() => {
			dispatch(hideLoader());
		}, 1000);

		return () => clearTimeout(timer);
	}, [dispatch]);

	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				<AppColumn>
					<Header />
					<Page>
						<Routes>
							<Route path="/" element={<Main />} />
							<Route path="/login" element={<Authorization />} />
							<Route path="/register" element={<Registration />} />
							<Route path="/users" element={<Users />} />
							<Route path="/material" element={<Material />} />
							<Route path="/material/:id" element={<Material />} />
							<Route path="/material/:id/edit" element={<Material />} />
							<Route
								path="*"
								element={<Error error={ERROR.PAGE_NOT_EXIST} />}
							/>
						</Routes>
					</Page>
					<Footer />
					<Modal />
				</AppColumn>
			)}
		</>
	);
};
