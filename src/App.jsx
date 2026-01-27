import { useState } from 'react';

import Header from './components/Header/Header.jsx'
import Summary from './components/Summary/Summary.jsx'
import Filters from './components/Filters/Filters.jsx';
import Toast from './components/Toast/Toast.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import TransactionForm from './components/TransactionForm/TransactionForm.jsx';
import TransactionList from './components/TransactionList/TransactionList.jsx';
import PeriodFilter from './components/PeriodFilter/PeriodFilter.jsx'

import { useTransactions } from './hooks/useTransactions.js';
import { useFilters } from './hooks/useFilters.js';
import { useTheme } from './hooks/useTheme.js';
import { useSummary } from './hooks/useSummary.js'
import { useCategories } from './hooks/useCategories.js';
import { usePeriodFilter } from './hooks/usePeriodFilter.js';
import { useToast } from './hooks/useToast.js';
import { useScroll } from './hooks/useScroll.js';

import './App.css'

function App() {
  const [editingTransaction, setEditingTransaction] = useState(null);

  const {
    transactions,
    pendingDelete,
    addTransaction,
    editTransaction,
    deleteTransaction,
    undoDelete
  } = useTransactions();

  const {
    month,
    year,
    setMonth,
    setYear,
    filteredByPeriod
  } = usePeriodFilter(transactions)

  const {
    filters,
    setFilters,
    filteredTransactions
  } = useFilters(filteredByPeriod)

  const {
    theme,
    toggleTheme
  } = useTheme();

  const {
    income,
    expense,
    balance
  } = useSummary(filteredByPeriod);

  const {
    toast,
    showToast,
    closeToast
  } = useToast()

  const {
    ref: formRef,
    scrollTo: scrollToForm
  } = useScroll()

  const {
    categories,
    addCategory
  } = useCategories();



  function handleAddTransaction(data) {
    addTransaction(data)
    showToast('Transação cadastrada com sucesso!')
  }

  function handleDeleteTransaction(id) {
    deleteTransaction(id)
    showToast('Transação excluída', 'info')
  }

  function handleUndo() {
    undoDelete();
    showToast('Exclusão desfeita', 'success')
  }

  function handleEditTransaction(data) {
    editTransaction(data)
    setEditingTransaction(null)
    showToast('Transação atualizada com sucesso!')
  }


  return (
    <>


      <Header
        onToggleTheme={toggleTheme}
        theme={theme}
      />

      <main className="container">
        <PeriodFilter
          month={month}
          year={year}
          onMonthChange={setMonth}
          onYearChange={setYear}
        />

        <Summary
          income={income}
          expense={expense}
          balance={balance}
        />

        <Dashboard transactions={transactions} />

        <TransactionForm
          categories={categories}
          onCreateCategory={addCategory}
          ref={formRef}
          onSubmit={editingTransaction ? handleEditTransaction : handleAddTransaction}
          initialData={editingTransaction}
          onCancel={() => {
            setEditingTransaction(null)
            showToast('Edição cancelada', 'info')
          }}
          onError={(message) => showToast(message, 'error')}
        />

        <Filters
          filters={filters}
          onChange={setFilters}
          categories={categories}
        />


        <TransactionList
          transactions={filteredTransactions}
          hasData={transactions.length > 0}
          onDelete={handleDeleteTransaction}
          onEdit={(transaction) => {
            setEditingTransaction(transaction)
            scrollToForm()
          }}
        />

        <Toast
          message={toast.message}
          type={toast.type}
          duration={3000}
          actionLabel={pendingDelete ? 'Desfazer' : null}
          onAction={handleUndo}
          onClose={closeToast}
        />

      </main>
    </>
  )
}

export default App