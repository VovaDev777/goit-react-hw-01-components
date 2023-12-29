import { Profile } from "./Profile/Profile";
import user from '../data/user.json';

export const App = () => {
  return (
    <div>
      <Profile 
      key = {1}
      username = {user.username}
      tag = {user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
      />
      
    </div>
  );
};



