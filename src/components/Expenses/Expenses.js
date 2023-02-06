import React, { useState } from "react";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const expenses = props.items;
  const [selectedFilter, setSelectedFilter] = useState("");

  const applyFilterHandler = (filter) => {
    setSelectedFilter(() => {
      return filter;
    });
    console.log("Inside Expenses.js : ", selectedFilter);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return (
      new Date(expense.date).getFullYear().toString() === selectedFilter ||
      selectedFilter.trim().length === 0
    );
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        className="expenses"
        onFilterChanged={applyFilterHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
