import { useMemo } from "react";

export function useDashboardData(transactions) {
    const expensesByCategory = useMemo(() => {
        const map = {};

        transactions
            .filter(t => t.type === 'expense')
            .forEach(t => {
                map[t.category] = (map[t.category] || 0) + t.amount;
            });

        return Object.entries(map).map(([category, total]) => ({
            category,
            total
        }));
    }, [transactions]);

    const monthlyExpenses = useMemo(() => {
        const map = {};

        transactions
            .filter(t => t.type === 'expense')
            .forEach(t => {
                const date = new Date(t.date);
                const key = `${date.getFullYear()} - ${String(date.getMonth() + 1
                ).padStart(2, '0')}`;

                map[key] = (map[key] || 0) + t.amount
            })

        return Object.entries(map)
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([month, total]) => ({
            month, total
        }));
    }, [transactions])

    return {
        expensesByCategory,
        monthlyExpenses
    }
}