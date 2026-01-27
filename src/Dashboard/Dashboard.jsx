import { useDashboardData } from "../hooks/useDashboardData";
import ExpensesByCategoryChart from "./expensesByCategoryChart";
import MonthlyExpensesChart from "./MonthlyEvolutionChart";
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