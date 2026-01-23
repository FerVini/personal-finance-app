import './TransactionItem.css'
import {
    Pencil,
    Trash2,
    ArrowUpRight,
    ArrowDownRight
} from 'lucide-react'
import { formatCurrency } from '../../utils/formatCurrency';
import { useState } from 'react';

export default function TransactionItem({ transaction, onEdit, onDelete }) {
    const { id, type, description, amount, category, date } = transaction;
    const [isExiting, setIsExiting] = useState(false);

    function handleDelete() {
        setIsExiting(true);

        setTimeout(() => onDelete(id), 300)
    }

    const TypeIcon = type === 'income'
        ? ArrowUpRight
        : ArrowDownRight

    return (
        <div className={`transaction-item ${type} animate-in ${isExiting ? 'animate-out' : ''}`}>
            <div className="transaction-info">
                <div className="transaction-header">
                    <TypeIcon size={16} />
                    <strong>{category}</strong>
                </div>

                <div className="date">
                    {new Date(date).toLocaleDateString('pt-BR')}
                </div>

                <p>{description}</p>
            </div>

            <div className="transaction-actions">
                <span className='value'>
                    {type === 'expese' ? '- ' : '+ '}
                    {formatCurrency(amount)}
                </span>

                <button
                    title='Editar'
                    onClick={() => onEdit(transaction)}
                >
                    <Pencil size={16} />
                </button>

                <button
                    className='danger'
                    title='Excluir'
                    onClick={handleDelete}
                >
                    <Trash2 size={16} />
                </button>
            </div>
        </div>
    )
}