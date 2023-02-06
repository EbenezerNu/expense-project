import "./ExpenseItem.css";
import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const changeTitleHandler = () => {
    return setTitle("Done");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h4>{title}</h4>
        <div className="expense-item__price">${props.amount.toFixed(2)}</div>
        <Card className="onclick-event">
          <button
            type="button"
            onClick={changeTitleHandler}
          >Confirm</button>
        </Card>
      </div>
    </Card>
  );
};

export default ExpenseItem;
