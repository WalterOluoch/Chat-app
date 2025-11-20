import { Suspense, lazy } from 'react';

const ChatPage = lazy(() => import('./pages/ChatPage.jsx'));
const appEnv = typeof __APP_ENV__ !== 'undefined' ? __APP_ENV__ : import.meta.env.MODE;

function App() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <h1>Socket.io Chat</h1>
        <p>Environment: {appEnv}</p>
      </header>
      <main>
        <Suspense fallback={<p className="loading">Loading chat experience…</p>}>
          <ChatPage />
        </Suspense>
      </main>
    </div>
  );
}

export default App;


