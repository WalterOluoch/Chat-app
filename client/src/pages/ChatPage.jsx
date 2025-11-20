import { useState } from 'react';
import MessageList from '../components/MessageList.jsx';
import UserList from '../components/UserList.jsx';
import TypingIndicator from '../components/TypingIndicator.jsx';
import { useSocket } from '../socket/socket.js';

const ChatPage = () => {
  const {
    isConnected,
    messages,
    users,
    typingUsers,
    connect,
    disconnect,
    sendMessage,
    setTyping,
  } = useSocket();

  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');

  const handleJoin = (event) => {
    event.preventDefault();
    if (!username.trim()) return;
    connect(username.trim());
  };

  const handleLeave = () => {
    disconnect();
  };

  const handleSend = (event) => {
    event.preventDefault();
    if (!message.trim()) return;
    sendMessage({ message: message.trim() });
    setTyping(false);
    setMessage('');
  };

  return (
    <section className="chat-container">
      <form className="session-form" onSubmit={handleJoin}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          name="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          placeholder="Enter a username"
          disabled={isConnected}
        />
        <div className="session-actions">
          <button type="submit" disabled={!username.trim() || isConnected}>
            Join
          </button>
          <button type="button" onClick={handleLeave} disabled={!isConnected}>
            Leave
          </button>
          <span className={`status-dot ${isConnected ? 'online' : 'offline'}`}>
            {isConnected ? 'Connected' : 'Disconnected'}
          </span>
        </div>
      </form>

      <div className="chat-layout">
        <aside>
          <h2>Participants</h2>
          <UserList users={users} />
        </aside>
        <div className="chat-panel">
          <MessageList messages={messages} />
          <TypingIndicator users={typingUsers} />
          <form className="message-form" onSubmit={handleSend}>
            <textarea
              rows="2"
              placeholder="Say something…"
              value={message}
              onChange={(event) => {
                setMessage(event.target.value);
                setTyping(Boolean(event.target.value.trim()));
              }}
              disabled={!isConnected}
            />
            <button type="submit" disabled={!message.trim() || !isConnected}>
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ChatPage;


