import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseItem"

const ExpenseList = (props) => {
  const ExpenseData = props.onExpense_Data_List;
  return (
    <Card className="expenses">
      {ExpenseData.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          price={expense.amount}
          date_secondary={expense.date}
        />
      ))}
    </Card>
  );
}

export default ExpenseList;