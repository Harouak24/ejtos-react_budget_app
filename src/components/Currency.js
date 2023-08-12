import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import '../Styles/Currency.css';

const CurrencySelector = () => {
  const { currency, dispatch } = useContext(AppContext);

  const handleCurrencyChange = (newCurrency) => {
    dispatch({ type: 'CHG_CURRENCY', payload: newCurrency });
  };

  return (
    <div className="currency-dropdown">
      <label>Currency: </label>
      <select value={currency} onChange={e => handleCurrencyChange(e.target.value)}>
        <option value="$"> $ Dollar</option>
        <option value="£"> £ Pound</option>
        <option value="€"> € Euro</option>
        <option value="₹"> ₹ Rupee</option>
      </select>
    </div>
  );
};

export default CurrencySelector;
