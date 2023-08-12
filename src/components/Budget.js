import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const { budget, setBudget, expenses, currency } = useContext(AppContext);
  const [editableBudget, setEditableBudget] = useState(budget);
  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);
  const handleBudgetChange = (newBudget) => {
    if (newBudget >= totalExpenses) {
      setEditableBudget(newBudget);
      setBudget(newBudget);
    } else {
        alert("You cannot reduce the budget lower than the spending");
        setBudget("");
    }
  };

  return (
    <div className='alert alert-secondary'>
      <span>
        Budget: {currency}
        <input
          type='number'
          value={editableBudget}
          onChange={e => handleBudgetChange(parseInt(e.target.value))}
          step={10}
        />
      </span>
    </div>
  );
};

export default Budget;
