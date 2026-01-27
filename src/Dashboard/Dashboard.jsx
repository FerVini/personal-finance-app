import { useDashboardData } from "../hooks/useDashboardData.js";
import ExpensesByCategoryChart from "./ExpensesByCategoryChart.jsx";
import MonthlyExpensesChart from "./MonthlyEvolutionChart.jsx";
import './Dashboard.css';

export default function Dashboard({transactions}) {
    const {
        expensesByCategory,
        monthlyExpenses
    } = useDashboardData(transactions)

    return (
        <section className="dashboard">
            <ExpensesByCategoryChart data={expensesByCategory}/>
            <MonthlyExpensesChart data={monthlyExpenses}/>
        </section>
    )
}