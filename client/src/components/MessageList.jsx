import PropTypes from 'prop-types';

const MessageList = ({ messages }) => (
  <ul className="messages">
    {messages.map((msg) => (
      <li key={msg.id} className={msg.system ? 'system' : ''}>
        <header>
          <strong>{msg.system ? 'System' : msg.sender}</strong>
          <small>{new Date(msg.timestamp).toLocaleTimeString()}</small>
        </header>
        <p>{msg.message}</p>
        {msg.isPrivate && <span className="badge">Private</span>}
      </li>
    ))}
  </ul>
);

MessageList.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      sender: PropTypes.string,
      message: PropTypes.string,
      timestamp: PropTypes.string.isRequired,
      system: PropTypes.bool,
      isPrivate: PropTypes.bool,
    }),
  ).isRequired,
};

export default MessageList;


