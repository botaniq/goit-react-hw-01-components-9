import React from 'react';
import styles from './socialProfileStyles.module.css';

const Profile = ({ avatar, name, tag, location, followers, views, likes }) => (
    <div class="profile">
        <div className="description">
            <img
                src={avatar}
                alt="Аватар пользователя"
                className="avatar"
            />
            <p className="name">{name}</p>
            <p className={styles.tag}>{tag}</p>
            <p className={styles.location}>{location}</p>
        </div>

        <ul class={styles.stats}>
            <li>
                <span className={styles.label}>Followers</span>
                <span className="quantity">{followers}</span>
            </li>
            <li>
                <span className={styles.label}>Views</span>
                <span className="quantity">{views}</span>
            </li>
            <li>
                <span className={styles.label}>Likes</span>
                <span className="quantity">{likes}</span>
            </li>
        </ul>
    </div>
);

export default Profile;