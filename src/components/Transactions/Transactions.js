
import React from 'react';
import PropTypes from 'prop-types';
import TransactionsAll from './TransactionItem';
import styles from './Transaction.module.css';

const TransactionsList = ({ transactions }) => (
    <ul>  <h2 className={styles.title}>Transactions</h2>
        {transactions.map((transaction) => (
            <li key={transaction.id}>
                < TransactionsAll
                    type={transaction.type}
                    amount={transaction.amount}
                    currency={transaction.currency}
                />
            </li>
        ))}
    </ul>);

TransactionsList.defaultProps = {
    type:'unknown',
  };

TransactionsList.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionsList;