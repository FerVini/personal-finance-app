import { useMemo } from "react"

export function useSummary(transactions) {
    const income = useMemo(() => {
        return transactions
            .filter(t => t.type === 'income')
            .reduce((acc, t) => acc + t.amount, 0)
    }, [transactions])

    const expense = useMemo(() => {
        return transactions
            .filter(t => t.type === 'expense')
            .reduce((acc, t) => acc + t.amount, 0)
    }, [transactions])

    const balance = useMemo(() => {
        return income - expense;
    }, [income, expense])

    return {
        income, 
        expense,
        balance
    }
} 