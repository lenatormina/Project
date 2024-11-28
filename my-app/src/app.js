import { Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components';
import { Authorization, Registration, Users, Material } from './pages';
import styled from 'styled-components';

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
	padding: 120px 0;
`;

export const App = () => {
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
		</AppColumn>
	);
};
