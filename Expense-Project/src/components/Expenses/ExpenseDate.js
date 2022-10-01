import React from 'react';
import "./ExpenseDate.css"

const ExpenseDate = (props) => {
  const year = props.date_primary.toLocaleString('en-US', { month: 'long' });
  const month = props.date_primary.toLocaleString('en-US', { day: '2-digit' });
  const day = props.date_primary.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;