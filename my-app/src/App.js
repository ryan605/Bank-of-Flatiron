import './App.css';
import React, {useEffect,useState} from 'react';
import Transaction from './Component/Transaction';
import NewItemForm from './Component/NewItemForm';
import SearchForm from './Component/SearchForm';

function App() {
  const[transactions, setTransactions]= useState([])
useEffect(()=>{
  fetch("https://my-json-server.typicode.com/ryan605/json/transactions")
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
fetch("https://my-json-server.typicode.com/ryan605/json/transactions",serverOption)
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
        <Transaction transactions={transactions}/>
       
    </div>
  );
}
export default App;