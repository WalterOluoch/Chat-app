import PropTypes from 'prop-types';

const UserList = ({ users }) => (
  <ul className="users">
    {users.map((user) => (
      <li key={user.id}>
        <span className="status-dot online" />
        {user.username}
      </li>
    ))}
    {!users.length && <li className="empty">No users connected</li>}
  </ul>
);

UserList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default UserList;


