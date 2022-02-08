import React, { useState } from 'react';

import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
    const items = props.items;
    const [filteredYear, setFilteredYear] = useState('2019');

    const filterChangeHandler = (selectedYear) => {
        console.log(selectedYear);
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = items.filter(expense => {

        const expenseYear = expense.date.getFullYear().toString();

        if(expenseYear === filteredYear){
        
            return expenseYear;
            }
    }) 

    return (  
        <li>
            <Card className="expenses">
                <ExpensesFilter 
                    selected={filteredYear} 
                    onChangeFilter={filterChangeHandler}
                /> 
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList items={filteredExpenses}/>
        </Card>
      </li>
    )
}

export default Expenses;

