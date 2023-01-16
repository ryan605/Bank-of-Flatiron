
import React ,{useEffect, useState} from 'react';
import Navbar from './Component/Navbar'
import Table from './Component/Table';



//  let url = 'http://localhost:3000/transactions'

function App() {
  const [transactions, setTransaction] = useState([])
  useEffect (() =>{
    fetch(`http://localhost:3000/transactions`)
    .then((res) =>res.json())
    .then((data) =>{setTransaction(data)})
   },[])
  return(
    <Table />
  )
}

export default App;