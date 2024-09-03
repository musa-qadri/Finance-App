import './App.css'

import { useState } from "react";
import CallBack from './CallBack'



function App() {

  const [amount, setAmount] = useState();
  const [type, setType] = useState('income');
  const [transactions, setTransactions] = useState([]);

  const handleTransction = () => {

    setTransactions([...transactions, { amount, type }])
    setAmount('')
    setType('income')
  }




  return (
    <>
      <h1 className='text-2xl font-bold' >Accounting App</h1>
       
       <CallBack amount={amount} setAmount={setAmount} type={type} setType={setType} transactions={transactions} handleTransction={handleTransction} />
      

    </>
  );
}

export default App;
