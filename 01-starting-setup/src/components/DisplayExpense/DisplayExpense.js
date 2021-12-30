import './DisplayExpense.css';
import Card from '../Card/Card';
import ExpensesList from "../ExpensesList/ExpensesList";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesChart from "../Chart/ExpensesChart";
import React, {useState} from "react";

const DisplayExpense = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {

      setFilteredYear(selectedYear)
    };

    const filteredExpenses = props.array.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}  />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    );
}

export default DisplayExpense;