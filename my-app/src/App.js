import './App.css';
import React, {useEffect,useState} from 'react';
import Transactions from './components/Transactions';
import NewItemForm from './components/NewItemForm';
import SearchForm from './components/SearchForm';
​
​
function App() {
  const[transactions, setTransactions]= useState([])
useEffect(()=>{
  fetch("http://localhost:6001/transactions")
  .then(r=>r.json())
  .then(transc=>setTransactions(transc))
},[])
console.log(transactions)
function handleUpdateOnSubmission(newTransaction){
  console.log(newTransaction)
  setTransactions(transactions=>[...transactions,newTransaction])
  const serverOption={
    method:"POST",
    headers:{
      "content-type": "application/json"
    },
    body:JSON.stringify(newTransaction)
  }
fetch("http://localhost:6001/transactions",serverOption)
.then(r=>r.json())
.then(newItem=>console.log(newItem))
}
  return (
    <div className="ui raise segment">
      <div className='header-text'>
        <h2>The Bank of Flatiron</h2>                
      </div>
      <SearchForm/>
      <NewItemForm onSubmission={handleUpdateOnSubmission}/>
        <Transactions transactions={transactions}/>
       
​
    </div>
  );
}
​
export default App;