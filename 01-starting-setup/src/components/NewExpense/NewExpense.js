import React, {useState} from "react";
import "./NewExpense.css";
import ExpenseForm from "../ExpenseForm/ExpenseForm";

const NewExpense = (props) => {

    const [opener, setOpener] = useState(0);

    const saveExpensedataHandler = (enteredExpenseData) => {

        const expenseData = {

            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);

        setOpener(0);
    };

    const openFormHandler = (event) => {

        event.preventDefault();
        setOpener(1);
    }

    const closeFormHandler = (event) => {

        event.preventDefault();
        setOpener(0);
    }

    if (opener === 1) {
        return (
            <div className="new-expense">
                <ExpenseForm onCancel={closeFormHandler} onSaveExpenseData={saveExpensedataHandler}/>
            </div>
        );
    }

    if (opener === 0) {
        return (
            <div className="new-expense">
                <button className="new-expense__actions" onClick={openFormHandler}>Add New Expense</button>
            </div>
        );
    }

};

export default NewExpense;