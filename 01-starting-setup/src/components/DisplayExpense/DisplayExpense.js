import './DisplayExpense.css';
import Card from '../Card/Card';
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import React from "react";

const DisplayExpense = (props) => {
    return (
        <Card className="expenses">
            {props.array.map((item) => (
                <ExpenseItem title={item.title} amount={item.amount} date={item.date} />
            ))}
        </Card>
    );
}

export default DisplayExpense;