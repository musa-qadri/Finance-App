import React from 'react'

export default function CallBack({amount,setAmount,type,setType,handleTransction, transactions  }) {

  const totalIncome = transactions.reduce(((acc, transaction) => transaction.type === 'income' ? acc + Number(transaction.amount) : acc), 0)
  const totalExpance = transactions.reduce(((acc, transaction) => transaction.type === 'expense' ? acc + Number(transaction.amount) : acc), 0)
  const balance = totalIncome - totalExpance

  return (
    
    <div>

    <div className='flex flex-col justify-center items-center mt-9 gap-7'>
      <div className='flex justify-center items-center gap-16'>
        <div className='p-4 border border-purple-400 font-semibold rounded '>
          <h1>Total Income</h1>
          <h1>{totalIncome}</h1>
        </div>
        <div className='p-4 border border-purple-400 font-semibold rounded '>
          <h1>Total Expense</h1>
          <h1>{totalExpance}</h1>
        </div>
        <div className={`p-4 border border-purple-400 font-semibold rounded ${balance < 0 ? 'bg-red-200' : ' bg-green-50'}`}>
          <h1>Balance</h1>
          <h1>{balance}</h1>
        </div>
      </div>
      <div className='flex  gap-9'>
        <input
          className='box- border-spacing-2 p-2 font-bold text-2xl rounded-lg border-blue border-2'
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder='Add Amount'
          type="number"
        />
        <br />
        <br />
        <select
          className=' border-spacing-2 px-2 font-bold text-2xl rounded-lg border-slate-950 border-2'
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value='income'>Income</option>
          <option value='expense'>Expense</option>
        </select>
        <br />
        <br />
        <button onClick={handleTransction} className='border  rounded-lg px-7 font-bold text-2xl border-slate-950 ' >submit</button>
      </div>
    </div>

    <div>
      {
        transactions.map((data, index) => {
          return (
            <div key={index} className={`flex  ${data.type === "income" ? 'bg-green-200' : 'bg-red-200'}  gap-6 mt-4 p-3 text-opacity-50`}>
              <h1 className='text-3xl underline font-bold  ' >{index + 1}{')'}{data.amount}</h1>
              <h1 className={`text-3xl underline font-bold  ${data.type === "income" ? 'text-green-700 ' : 'text-red-700'} `}> {data.type}</h1>
            </div>
          )

        })
      }
    </div>


  </div>
  )
}
