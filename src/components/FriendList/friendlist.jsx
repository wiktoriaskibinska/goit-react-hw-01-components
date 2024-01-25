import React from 'react';
import css from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <div className={css.wrapper}>
      <ul className={css.friendList}>
        {friends.map(friend => (
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
            key={friend.id}
          />
        ))}
      </ul>
    </div>
  );
};

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      <span
        className={`${css.status} ${isOnline ? css.online : css.offline}`}
      ></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

export default FriendList;
