import React from 'react';
import PropTypes from 'prop-types';
import styles from './socialProfileStyles.module.css';

const Profile = ({ avatar, name, tag, location, followers, views, likes }) => (
    <div className="profile">
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

        <ul className={styles.stats}>
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

Profile.defaultProps = {
    location:'The Earth',
    
};

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

export default Profile;