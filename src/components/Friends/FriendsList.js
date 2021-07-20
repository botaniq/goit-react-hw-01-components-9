
import React from 'react';
import PropTypes from 'prop-types';
import Friends from './FriendsElement';
import styles from './friends.module.css';

const FriendsList = ({ friends }) => (
    <ul className={styles.friendList}> <h2 className={styles.title}>Friends</h2>
        {friends.map((friend) => (
            
                < Friends
                    avatar={friend.avatar}
                    name={friend.name}
                    status={friend.isOnline}
                />
            
        ))}
    </ul>);


FriendsList.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};

export default FriendsList;