import "./NewExpense.css";
import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import Card from "../UI/Card";

const NewExpense = (props) => {
  const saveExpenseHandler = (expense) => {
    const newExpense = { ...expense };
    console.log("Inside New Expense : ", newExpense);
    props.onAddExpense(newExpense);
  };

  const [formShow, setFormShow] = useState(false);

  const formShowHandler = (e) => {
    console.log("Inside New Expense : ", e.target.value);
    setFormShow(() => {
      return e.target.value === "true";
    });
  };

  return (
    <div>
      <Card className="new-expense">
        {formShow && (
          <ExpenseForm
            onSaveExpenseData={saveExpenseHandler}
            onShowExpenseForm={formShowHandler}
          />
        )}
        {!formShow && (
          <div className="">
            <button
              type="button"
              onClick={formShowHandler}
              className="new-expense__actions"
              value="true"
            >
              Add Expense
            </button>
          </div>
        )}
      </Card>
    </div>
  );
};

export default NewExpense;
