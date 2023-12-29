import React from 'react'
import './TransactionHistory.css'

const TransactionHistory = ({items}) => {
  return (
    <table className="transaction-history">
  <thead className="table-head">
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody className="table-body">
    {items.map(({id, type, amount, currency}) => (
        <tr key = {id}>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    ))}
  </tbody>
</table>
  )
}

export {TransactionHistory};
// {id, type, amount, currency}