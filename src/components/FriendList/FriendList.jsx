import { Avatar, IsOnline, List, ListFriend, Name } from './FriendsList.styled';

export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(friend => (
        <ListFriend key={friend.id}>
          <IsOnline>{friend.isOnline}</IsOnline>
          <Avatar src={friend.avatar} alt="User avatar" width="56" />
          <Name>{friend.name}</Name>
        </ListFriend>
      ))}
    </List>
  );
};
