import TransactionItem from "./TransactionItem"

export default function Transactions({transactions}){

    return(

        <table>
            <tbody>
            <tr>
               <th>Date</th> 
               <th>Description</th> 
               <th>Category</th> 
               <th>Amount</th> 
            </tr>
            {/*transaction item*/}

            {transactions.map(transc=>{
                return<TransactionItem
                date={transc.date}
                description={transc.description}
                category={transc.category}
                amount={transc.amount}
                key={transc.id}
                />
            })}
            </tbody>
        </table>
    )
}