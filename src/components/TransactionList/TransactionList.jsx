import TransactionItem from "../TransactionItem/TransactionItem.jsx";
import { FileText } from 'lucide-react'
import './TransactionList.css';

export default function TrasactionList({
    transactions,
    onEdit,
    onDelete,
    hasData
}) {

    if (!hasData) {
        return (
            <div className="empty-message">
                <FileText size={32} />
                <p>
                    Você ainda não registrou nenhuma transação.
                    <br />
                    Use o formulário acima para adicionar sua primeira receita ou despesa.
                </p>
            </div>
        )
    }

    if (!transactions.length) {
        return (
            <div className="empty-message">
                <FileText size={32}/>
                <p>
                    Nenhuma transação encontrada com os filtros selecionados.
                </p>
            </div>
        )
    }

    return (
        <section className="transaction-list">
            {transactions.map(transaction => (

                <TransactionItem
                    key={transaction.id}
                    transaction={transaction}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />
            ))}
        </section>
    )
}