import React, { useState } from 'react';

import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2019');

    const filterChangeHandler = (selectedYear) => {
        console.log(selectedYear);
        setFilteredYear(selectedYear);
    }

    const items = props.items;

    return (  
        <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/> 
            <ExpenseItem
            title={items[0].title}
            amount={items[0].amount}
            date={items[0].date}
            />
            <ExpenseItem
            title={items[1].title}
            amount={items[1].amount}
            date={items[1].date}
            />
            <ExpenseItem
            title={items[2].title}
            amount={items[2].amount}
            date={items[2].date}
            />
            <ExpenseItem
            title={items[3].title}
            amount={items[3].amount}
            date={items[3].date}
            />
      </Card>
    )
}

export default Expenses;