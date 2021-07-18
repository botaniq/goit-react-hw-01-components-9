
import React from 'react';
import PropTypes from 'prop-types';
import Statistics from './StatElement';
import styles from './Statistics.module.css';

const StatisticsList = ({ stats }) => (
    <ul>  <h2 className={styles.title}>Upload stats</h2>
        {stats.map((stat) => (
            <li key={stat.id}>
                < Statistics
                    label={stat.label}
                    percentage={stat.percentage}
                />
            </li>
        ))}
    </ul>);

    StatisticsList.defaultProps = {
    
    percentage: 0,
    };

StatisticsList.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number,
  };

export default StatisticsList;