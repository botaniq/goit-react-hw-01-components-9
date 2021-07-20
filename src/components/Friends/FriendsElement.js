import React from 'react';
import styles from './friends.module.css';


const FriendsElement = ({ avatar, name, status, id }) => (
    <li className={styles.item} key={id}>
        <span className={status ? styles.statusOnline : styles.statusOffline}></span>
        <img className={styles.avatar} src={avatar} alt={name} width="150" />
        <p>{name}</p>

    </li>
);

export default FriendsElement;

