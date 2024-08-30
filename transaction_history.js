// Sidebar
import React from 'react';
import './Sidebar.css';
import './TransactionHistory.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">subssum</div>
      <ul>
        <li>Dashboard</li>
        <li>Buy Airtime</li>
        <li>Buy Data</li>
        <li>TV Subscription</li>
        <li>Pay Electric Bill</li>
        <li>Airtime to Cash</li>
        <li className="active">Transaction History</li>
        <li>Help & Support</li>
        <li>Log Out</li>
      </ul>
    </div>
  );
};

export default Sidebar;

// TransactionHistory

const transactions = [
  {
    service: 'Mtn Airtime VTU',
    amount: '₦100.00',
    totalAmount: '₦100.00',
    status: 'Initiated',
    paymentMethod: 'Transfer',
    transactionNo: '17045621860850336938179613',
    date: '6th January, 2024, 06:29PM',
  },
  // Add more transactions as needed
];

const TransactionHistory = () => {
  return (
    <div className="transaction-history">
      <header>
        <h1>Transaction History</h1>
        <button className="filter-button">Filter</button>
      </header>
      <table>
        <thead>
          <tr>
            <th>Service</th>
            <th>Amount</th>
            <th>Total Amount</th>
            <th>Status</th>
            <th>Payment Method</th>
            <th>Transaction No</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.service}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.totalAmount}</td>
              <td className={transaction.status.toLowerCase()}>{transaction.status}</td>
              <td>{transaction.paymentMethod}</td>
              <td>{transaction.transactionNo}</td>
              <td><button className="open-button">Open</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
