import React from 'react';
import styles from './Transaction.module.css';


const TransactionElement = ({ type, amount, currency }) => (


    <table className={styles.transactionHistory}>
        <thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>

        <tbody>
            <tr>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
            </tr>

        </tbody>
    </table>

);

export default TransactionElement;