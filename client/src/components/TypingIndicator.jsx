import PropTypes from 'prop-types';

const TypingIndicator = ({ users }) => {
  if (!users.length) return null;

  const label =
    users.length === 1
      ? `${users[0]} is typing…`
      : `${users.slice(0, 2).join(', ')} ${users.length > 2 ? 'and others ' : ''}are typing…`;

  return <p className="typing-indicator">{label}</p>;
};

TypingIndicator.propTypes = {
  users: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TypingIndicator;


