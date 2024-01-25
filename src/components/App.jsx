import Profile from './Profile/Profile.jsx';
import user from './Profile/user.json';
import Statistics from './Statistics/Statistics.jsx';
import data from './Statistics/data.json';
import FriendList from './FriendList/FriendList.jsx';
import friends from './FriendList/friends.json';
import TransactionsHistory from './Transactions/TransactionsHistory.jsx';
import transactions from './Transactions/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics tittle="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionsHistory items={transactions} />
    </div>
  );
};
