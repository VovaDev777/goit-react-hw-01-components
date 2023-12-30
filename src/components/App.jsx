import { Profile } from "./Profile/Profile";
import user from '../data/user.json';
import data from '../data/data.json';
import { Statistics } from "./Statistic/Statistics";
import { TransactionHistory } from "./Transaction/TransactionHistory";
import transactions from '../data/transactions.json';
import { FriendList } from "./Friend/FriendList";
import friends from '../data/friends.json'

export const App = () => {
  return (
    <div>
      <Profile 
      username = {user.username}
      tag = {user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />;
    </div>
  );
};



