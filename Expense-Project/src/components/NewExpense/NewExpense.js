import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css"

const NewExpense = (props) => {
  const [isValid, setisValid] = useState(true);
  const saveDataHandler = (enteredValue) => {
    const expenseData_id = {
      ...enteredValue, id: Math.random().toString()
    }
    props.onAddDataHandler(expenseData_id)
    setisValid(true);
  }

  const onStartEditingHandler = () => {
    setisValid(false)
  }

  const onStopEditingHandler = () => {
    setisValid(true)
  }

  return (
    <div className="new-expense">
      {isValid ?
        <button onClick={onStartEditingHandler}>Add Expense</button> :
        <ExpenseForm onSaveDataHandler={saveDataHandler} onCloseEditing={onStopEditingHandler} />
      }
    </div>
  );
}

export default NewExpense;