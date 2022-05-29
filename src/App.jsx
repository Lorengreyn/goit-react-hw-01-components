import Profile from './components/Profile/Profile';
import user from './components/Profile/user.json';

import Statistics from './components/Statistics/Statistics';
import data from './components/Statistics/data.json';

import FriendsLi from './components/Friends/FriendsLi';
import friends from './components/Friends/friends.json';

import TransactionHistory from './components/Transactions/TransactionHistory';
import transactions from './components/Transactions/transaction.json';

import BrowserRouter from 'react-dom';

function App() {
  const { tag, username, location, avatar, stats } = user;
  return (
    <div
     style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        backgroundColor: 'gray'
      }}>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendsLi friends={friends} />
      <TransactionHistory items={transactions} />
      <BrowserRouter basename="/goit-react-hw-01-components/">
  <App />
</BrowserRouter>
    </div>
  );
}

export default App;
