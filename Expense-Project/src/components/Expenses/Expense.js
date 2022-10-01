import React, { useState } from 'react';
import Card from "../UI/Card";
import ExpenseList from './ExpenseList';

import "./Expenses.css"
import ExpenseFilter from './ExpensesFilter';

const Expense = (props) => {
  const [yearValue, setYearValue] = useState("All")

  const expenseDataList = props.onExpenseDataList_App;

  const YearValueHandler = (selectedYear) => {
    setYearValue(selectedYear);
  }

  const filteredExpenseData = expenseDataList.filter((expenseDataList) => {
    if (yearValue === "All") {
      return expenseDataList;
    } else {
      return expenseDataList.date.getFullYear().toString() === yearValue;
    }
  })

  return (
    <Card className="expenses">
      <ExpenseFilter onYearValue={YearValueHandler} />
      <ExpenseList onExpense_Data_List={filteredExpenseData} />
    </Card>
  );
}

export default Expense;