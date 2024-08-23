import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../components/Transactions.css'; 

const TransactionList = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/api/v1/transaction', {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        setTransactions(response.data.transactions);
      } else {
        console.error('Failed to fetch transactions');
      }
    } catch (error) {
      console.error('Error fetching transactions:', error);
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className="transaction-list-container">
      <div className="transaction-card">
        <h2>Transaction List</h2>
        {loading ? (
          <p>Loading transactions...</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Car ID</th>
                <th>Buyer ID</th>
                <th>Seller ID</th>
                <th>Date</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td>{transaction.id}</td>
                  <td>{transaction.car_id}</td>
                  <td>{transaction.buyer_id}</td>
                  <td>{transaction.seller_id}</td>
                  <td>{new Date(transaction.date).toLocaleDateString()}</td>
                  <td>${transaction.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default TransactionList;














// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import '../components/Transactions.css'; 

// const TransactionList = () => {
//   const [transactions, setTransactions] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchTransactions();
//   }, []);

//   const fetchTransactions = async () => {
//     try {
//       const response = await axios.get('http://127.0.0.1:5000/api/v1/transaction', {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       if (response.status === 200) {
//         setTransactions(response.data.transactions);
//       } else {
//         console.error('Failed to fetch transactions');
//       }
//     } catch (error) {
//       console.error('Error fetching transactions:', error);
//     } finally {
//       setLoading(false); 
//     }
//   };

//   return (
//     <div>
//       <h2>Transaction List</h2>
//       {loading ? (
//         <p>Loading transactions...</p>
//       ) : (
//         <table>
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Car ID</th>
//               <th>Buyer ID</th>
//               <th>Seller ID</th>
//               <th>Date</th>
//               <th>Amount</th>
//             </tr>
//           </thead>
//           <tbody>
//             {transactions.map((transaction) => (
//               <tr key={transaction.id}>
//                 <td>{transaction.id}</td>
//                 <td>{transaction.car_id}</td>
//                 <td>{transaction.buyer_id}</td>
//                 <td>{transaction.seller_id}</td>
//                 <td>{new Date(transaction.date).toLocaleDateString()}</td>
//                 <td>${transaction.amount}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default TransactionList;
