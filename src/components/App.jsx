import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import { GlobalStyle } from './GlobalStyle';

import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile userInfo={user} />
      <Statistics title="Upload stats" statData={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />

      <GlobalStyle />
    </div>
  );
};
