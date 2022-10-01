import { useState } from 'react';
import './App.css';
import Expense from './components/Expenses/Expense';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const EXPENSE_DATA = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: 'e2',
      title: 'New TV',
      amount: 799.49,
      date: new Date(2021, 2, 12)
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
    {
      id: 'e5',
      title: 'New Desasdasdk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const [enteredData, setEnteredData] = useState(EXPENSE_DATA);

  const AddDataHandler = (expenseData_id_Added) => {
    setEnteredData((prevData) => {
      return [expenseData_id_Added, ...prevData];
    })
  }

  return (
    <>
      <h1>Let's Do Starting!</h1>
      <NewExpense onAddDataHandler={AddDataHandler} />
      <Expense onExpenseDataList_App={enteredData} />
    </>
  );
}

export default App;
