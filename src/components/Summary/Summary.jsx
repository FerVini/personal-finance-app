import { Wallet, TrendingUp, TrendingDown } from 'lucide-react'
import './Summary.css'
import { formatCurrency } from '../../utils/formatCurrency'

export default function Summary({ income = 0, expense = 0, balance = 0 }) {
    const isNegative = balance < 0;

    return (
        <section className="summary">
            <div className="card income">
                <div className="card-header">
                    <TrendingUp size={18} />
                    <span className="card-title">Receitas</span>
                </div>
                <strong className="card-value">
                    {formatCurrency(income)}
                </strong>
            </div>

            <div className="card expense">
                <div className="card-header">
                    <TrendingDown size={18} />
                    <span className="card-title">Despesas</span>
                </div>
                <strong className='card-value'>
                    {formatCurrency(expense)}
                </strong>
            </div>

            <div className={`card balance ${balance < 0 ? 'negative' : ''}`}>
                <div className="card-header">
                    <Wallet size={20} />
                    <span className="card-title">Saldo</span>
                </div>
                <strong className='card-value'>
                    {formatCurrency(balance)}
                </strong>
            </div>
        </section>
    )
}