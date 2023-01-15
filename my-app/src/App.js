
import React ,{useEffect, useState} from 'react';
import Navbar from './Component/Navbar'
import Table from './Component/Table';

console.log('2')
let url = 'http://localhost:3000/transactions'
function App() {
   const [bank, setBank] = useState(null)
  console.log(1)
  useEffect(()=>{
  fetch(url)
    .then(res=>res.json())
    .then((data)=>{
    
       const alphabetical = data.sort((a,b)=>a.description.localeCompare(b.description) )
      console.log(alphabetical)
         setBank(data)
      
    })
  },[]) // specifying an empty dependancy list to useEffect(Second parameter to useEffect is an empty array)
  
  
  if(bank === null){
    return null
  } 
  console.log(bank)

  
   const trns = bank.map((info)=>{
    return info
   })
   console.log(trns)
  return (
    <div className="App">
  {}
    <Navbar/>
    <Table data = {trns}/>
      
    </div>
  );

}

export default App;