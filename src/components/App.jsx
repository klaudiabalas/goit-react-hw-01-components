import { FriendList } from './Friend/Friend';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
// import { TransactionHistory } from './Transactions/Transactions';

import data from './DataJSON/data.json';
import friends from './DataJSON/friends.json';
// import transactions from './DataJSON/transactions.json';
import user from './DataJSON/user.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      {/* <TransactionHistory items={transactions} /> */}
    </div>
  );
};
