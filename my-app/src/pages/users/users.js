import styled from 'styled-components';
import { H2 } from '../../components';
import { UserRow, TableRow } from './components';
import { useServerRequest } from '../../hooks';
import { useState, useEffect } from 'react';
import { Content } from '../../components';

const UsersContainer = ({ className }) => {
	const [users, setUsers] = useState([]);
	const [roles, setRoles] = useState([]);
	const [errorMessage, setErrorMessage] = useState(null);

	const requestServer = useServerRequest();

	useEffect(() => {
		Promise.all([requestServer('fetchUsers'), requestServer('fetchRoles')]).then(
			([usersRes, rolesRes]) => {
				if (usersRes.error || rolesRes.error) {
					setErrorMessage(usersRes.error || rolesRes.error);
					console.log(usersRes.error);
					return;
				}
				console.log(usersRes);
				setUsers(usersRes.res);
				setRoles(rolesRes.res);
			},
		);
	}, [requestServer]);

	return (
		<div className={className}>
			<Content error={errorMessage}>
				<H2>Пользователи</H2>
				<div>
					<TableRow>
						<div className="login-column">Логин</div>
						<div className="registered-at-column">Дата регистрации</div>
						<div className="role-column">Роль</div>
					</TableRow>
					{users.map(({ id, login, registeredAt, roleId }) => (
						<UserRow
							key={id}
							login={login}
							registeredAt={registeredAt}
							roleId={roleId}
							roles={roles}
						/>
					))}
				</div>
			</Content>
		</div>
	);
};
export const Users = styled(UsersContainer)`
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	align-items: center;
	width: 570px;
	font-size: 18px;
`;
