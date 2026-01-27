import { useMemo, useState } from "react";

export function usePeriodFilter(transactions) {
    const now = new Date();

    const [month, setMonth] = useState(now.getMonth());
    const [year, setYear] = useState(now.getFullYear());

    const filteredByPeriod = useMemo(() => {
        return transactions.filter(transaction => {
            const date = new Date(transaction.date);

            return (
                date.getMonth() === month &&
                date.getFullYear() === year
            );
        });
    }, [transactions, month, year]);

    return {
        month,
        year,
        setMonth,
        setYear,
        filteredByPeriod
    }
}