import React from 'react';
import { nanoid } from 'nanoid';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const saveExpenseHandler = (expenseData) => {
    const expense = {
      ...expenseData,
      id: nanoid(10)
    };
    props.onAddExpense(expense);
  }
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpense={saveExpenseHandler} />
    </div>
  );
}

export default NewExpense;
