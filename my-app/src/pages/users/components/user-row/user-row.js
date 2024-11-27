import styled from 'styled-components';
import { Icon } from '../../../../components';
import { useDispatch } from 'react-redux';
import { TableRow } from '../table-row/table-row';

const UserRowContainer = ({
	className,
	login,
	registeredAt,
	roleId: userRoleId,
	roles,
}) => {
	const dispatch = useDispatch();
	const onRoleChange = () => {};

	return (
		<div className={className}>
			<TableRow>
				<div className="login-column">{login}</div>
				<div className="registered-at-column">{registeredAt}</div>
				<div className="role-column">
					<select value={userRoleId} onChange={onRoleChange}>
						{roles.map(({ id: roleId, name: roleName }) => (
							<option key={roleId} value={roleId}>
								{roleName}
							</option>
						))}
					</select>
					<Icon
						id="fa-floppy-o"
						margin="0 0 0 15px"
						onClick={() => dispatch(/* TODO */)}
					/>
				</div>
			</TableRow>
			<Icon
				id="fa-trash-o"
				margin="0 0 0 15px"
				onClick={() => dispatch(/* TODO */)}
			/>
		</div>
	);
};

export const UserRow = styled(UserRowContainer)``;
