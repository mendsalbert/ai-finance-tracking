import React from "react";
import BudgetList from "./_components/BudgetList";

function Income() {
  return (
    <div className="p-10">
      <h2 className="font-bold text-3xl">My Incomes</h2>
      <BudgetList />
    </div>
  );
}

export default Income;
