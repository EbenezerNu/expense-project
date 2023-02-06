import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      id: "1",
      title: "Health Insurance",
      amount: 10.0,
      date: new Date("2020", "0", "15"),
    },
    {
      id: "2",
      title: "Transportation",
      amount: 105.0,
      date: new Date("2020", "3", "18"),
    },
    {
      id: "3",
      title: "Feeding",
      amount: 120.0,
      date: new Date("2021", "8", "1"),
    },
    {
      id: "4",
      title: "Utility",
      amount: 500.0,
      date: new Date("2022", "5", "5"),
    },
    {
      id: "5",
      title: "Committments",
      amount: 450.0,
      date: new Date(),
    },
  ];

  const [expenseList, setExpenseList] = useState(expenses);

  const addExpenseHandler = (newExpense) => {
    setExpenseList((prevState) => {
      let newId = prevState[prevState.length - 1].id + 1;
      return [
        ...prevState,
        {
          id: newId.toString(),
          title: newExpense.enteredTitle,
          amount: parseInt(newExpense.enteredAmount),
          date: new Date(newExpense.enteredDate),
        },
      ];
    });
    console.log("Inside App.js : ", newExpense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenseList} />
    </div>
  );
}

export default App;
