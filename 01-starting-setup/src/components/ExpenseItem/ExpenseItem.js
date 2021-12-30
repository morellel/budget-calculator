import './ExpenseItem.css';
import '../ExpenseForm/ExpenseForm.css'
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import Card from "../Card/Card";
import React, {useState} from "react";

const ExpenseItem = (props) => {

    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle('Updated!');
    }

    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={props.date} />
                <div className="expense-item__description">
                    <h2>{title}</h2>
                    <div className="expense-item__price">${props.amount}</div>
                </div>
                <button className="new-expense__actions" onClick={clickHandler}>Change Title</button>
            </Card>
        </li>
    );
}

export default ExpenseItem;