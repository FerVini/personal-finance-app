import { useMemo, useState } from "react";

export function usePeriodFilter(transactions) {
  const now = new Date();

  const [period, setPeriod] = useState({
    month: 'all',
    year: 'all'
  });

  const filteredByPeriod = useMemo(() => {
    return transactions.filter(transaction => {
      const date = new Date(transaction.date);

      const matchMonth =
        period.month === 'all' ||
        date.getMonth() === Number(period.month);

      const matchYear =
        period.year === 'all' ||
        date.getFullYear() === Number(period.year);

      return matchMonth && matchYear;
    });
  }, [transactions, period]);

  return {
    period,
    setPeriod,
    filteredByPeriod
  };
}