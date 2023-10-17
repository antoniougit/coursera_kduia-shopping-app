import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, expenses, currency } = useContext(AppContext);
    const totalExpenses = expenses.reduce((sum, item) => {
        return (sum = sum + item.cost);
    }, 0);
    const setBudget = (event) => {
        if (event.target.value > 20000) {
            alert('Budget cannot exceed 20.000!');
            setBudget('');
            return;
        }
        if (event.target.value < totalExpenses) {
            alert('Amount cannot be lower than the amount spent!');
            setBudget('');
            return;
        }
        dispatch({
            type: 'SET_BUDGET',
            payload: event.target.value,
        });
    };

    return (
        <div className="alert alert-secondary">
            <span>
                Budget: {currency}
                <input
                    defaultValue={budget}
                    min={totalExpenses}
                    required="required"
                    step="10"
                    style={{ marginLeft: '0.25rem' }}
                    type="number"
                    onInput={(event) => setBudget(event)}
                />
            </span>
        </div>
    );
};
export default Budget;
