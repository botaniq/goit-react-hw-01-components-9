import React from 'react';
import styles from './Statistics.module.css';


const StatisticsElement = ({ label, percentage }) => (


    <ul className={styles.statList}>

        <li className={styles.item}>
            <span className={styles.label}>{label}</span>
            <span className="percentage">{percentage}%</span>
        </li>

    </ul>

);

export default StatisticsElement;