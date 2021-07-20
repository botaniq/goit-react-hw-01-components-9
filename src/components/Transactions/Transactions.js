
import React from 'react';
import PropTypes from 'prop-types';
import TransactionsAll from './TransactionItem';
import styles from './Transaction.module.css';

const TransactionsList = ({ transactions }) => (
  <section> <h2 className={styles.title}>Transactions</h2> <ul>
        {transactions.map((transaction) => (
            <li key={transaction.id}>
                < TransactionsAll
                    type={transaction.type}
                    amount={transaction.amount}
                    currency={transaction.currency}
                />
            </li>
        ))}
    </ul> </section>);

TransactionsList.defaultProps = {
    type:'unknown',
  };

TransactionsList.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionsList;