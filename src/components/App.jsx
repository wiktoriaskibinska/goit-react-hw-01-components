import Profile from './profile/profile';
import user from './profile/user.json';
import Statistics from './statistics/statistics';
import data from './statistics/data.json';
import FriendList from './friendList/friendList';
import friends from './friendList/friends.json';
import TransactionsHistory from './transactions/transactionsHistory';
import transactions from './transactions/transactions.json';

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
