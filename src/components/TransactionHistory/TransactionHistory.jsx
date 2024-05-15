import "./TransactionHistory.css"
const TransactionHistory = ({ items }) => {
  return (<table className="table-container"> 
    <thead className="table-head">
      <tr className="table-head-line">
        <th className="table-head-title">Type</th>
        <th className="table-head-title">Amount</th>
        <th className="table-head-title">Currency</th>
      </tr>
    </thead>

    <tbody className="table-body">{items.map((item, index) => (
      
      index%2  ===0) ? (<tr key={item.id} className="transaction-card">
        <td className="transaction-info">{item.type}</td>
        <td className="transaction-info">{item.amount}</td>
        <td className="transaction-info">{item.currency}</td></tr>) : (<tr key={item.id} className="transaction-card">
        <td className="transaction-info-odd">{item.type}</td>
          <td className="transaction-info-odd">{item.amount}</td>
          <td className="transaction-info-odd">{item.currency}</td>
        </tr>))}
     
    </tbody>
  </table>)
};
export default TransactionHistory;