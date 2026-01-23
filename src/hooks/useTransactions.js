import { useState, useEffect } from 'react';

export function useTransactions() {
    const [transactions, setTransactions] = useState(() => {
        const stored = localStorage.getItem('transactions')
        return stored ? JSON.parse(stored) : []
    });

    const [pendingDelete, setPendingDelete] = useState(null);

    useEffect(() => {
        localStorage.setItem('transactions', JSON.stringify(transactions))
    }, [transactions])

    useEffect(() => {
        if (!pendingDelete) return;

        const timer = setTimeout(() => {
            setPendingDelete(null)
        }, 3000)

        return () => clearTimeout(timer)
    }, [pendingDelete])

    function addTransaction(data) {
        const newTransaction = {
            ...data,
            id: crypto.randomUUID()
        };

        setTransactions(prev => [...prev, newTransaction]);
    }

    function deleteTransaction(id) {
        setTransactions(prev => {
            const index = prev.findIndex(t => t.id === id)
            const transaction = prev[index]

            setPendingDelete({ transaction, index })

            return prev.filter(t => t.id !== id)
        })
    }

    function undoDelete() {
        if (!pendingDelete) return;

        setTransactions(prev => {
            const copy = [...prev]
            copy.splice(pendingDelete.index, 0, pendingDelete.transaction)
            return copy
        })

        setPendingDelete(null)
    }

    function editTransaction(updatedTransaction) {
        setTransactions(prev =>
            prev.map(transaction =>
                transaction.id === updatedTransaction.id
                    ? updatedTransaction
                    : transaction
            )
        )
    }


    return {
        transactions,
        pendingDelete,
        addTransaction,
        editTransaction,
        deleteTransaction,
        undoDelete
    }
}
