import { useState, useMemo } from "react";

const INITIAL_FILTERS = {
    type: 'all',
    category: 'all',
    order: 'date-desc'
};

export function useFilters(transactions) {
    const [filters, setFilters] = useState(INITIAL_FILTERS);

    const filteredTransactions = useMemo(() => {
        let result = [...transactions]

        if (filters.type !== 'all') {
            result = result.filter(t => t.type === filters.type)
        }

        if (filters.category !== 'all') {
            result = result.filter(t => t.category === filters.category)
        }

        switch (filters.order) {
            case 'date-asc':
                result.sort((a, b) => new Date(a.date) - new Date(b.date))
                break;
            case 'date-desc':
                result.sort((a, b) => new Date(b.date) - new Date(a.date))
                break;
            case 'value-asc':
                result.sort((a, b) => a.amount - b.amount)
                break;
            case 'value-desc':
                result.sort((a, b) => b.amount - a.amount)
                break;

            default:
                break;
        }

        return result
    }, [transactions, filters])

    return {
        filters,
        setFilters,
        filteredTransactions
    }
}