import React from 'react';
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css"

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date_primary={props.date_secondary} />
      <h2 className="expense-item__description">{props.title}</h2>
      <div className="expense-item__price">{props.price}</div>
    </Card>
  );
}

export default ExpenseItem;