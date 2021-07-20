
import React from 'react';
import PropTypes from 'prop-types';
import Statistics from './StatElement';
import styles from './Statistics.module.css';

const StatisticsList = ({ stats, title }) => (
   <section class="statistics"> <h2 className={styles.title}>{title}</h2> <ul>  
        {stats.map((stat) => (
            <li key={stat.id}>
                < Statistics
                    label={stat.label}
                    percentage={stat.percentage}
                />
            </li>
        ))}
    </ul> </section>);

    StatisticsList.defaultProps = {
    
    percentage: 0,
    };

StatisticsList.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number,
  };

export default StatisticsList;