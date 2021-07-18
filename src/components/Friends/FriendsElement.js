import React from 'react';
import styles from './friends.module.css';


const FriendsElement = ({ avatar, name, status }) => (
    <li className={styles.item}>
        <span className={status ? styles.statusOnline : styles.statusOffline}></span>
        <img className={styles.avatar} src={avatar} alt={name} width="150" />
        <p className={styles.name}>{name}</p>

    </li>
);

export default FriendsElement;

// className={styles.status}
// {status ? (style = "color:blue;font-size:46px;") : 'есть в наличии'}
// {
//     status ? (
//         <span className={styles.statusOnline}></span>
//     ) : (
//         <span className={styles.statusOffline}></span>
//     )
// }