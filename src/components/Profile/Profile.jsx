import { ProfileStats } from 'components/ProfileStats/ProfileStats';

export const Profile = ({ userInfo }) => {
  console.log(userInfo.tag);
  return (
    <div>
      <div>
        <img src={userInfo.avatar} alt="user avatar" width="100" />
        <p>{userInfo.username}</p>
        <p>@{userInfo.tag}</p>
        <p>{userInfo.location}</p>
      </div>
      <ProfileStats userStats={userInfo.stats} />
    </div>
  );
};
