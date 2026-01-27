import './PeriodFilter.css';

const MONTHS = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril',
    'Maio', 'Junho', 'Julho', 'Agosto',
    'Setembro', 'Outubro', 'Novembro', 'Dezembro'
]

export default function PeriodFilter({month, year, onMonthChange, onYearChange}) {
    const years = Array.from({length: 6}, (_, i) => new Date().getFullYear() - i);

    return (
        <section className='period-filter'>
            <select value={month} onChange={e => onMonthChange(Number(e.target.value))}>
                {MONTHS.map((label, index) => (
                    <option key={index} value={index}>
                        {label}
                    </option>
                ))}
            </select>

            <select value={year} onChange={e => onYearChange(Number(e.target.value))}>
                {years.map(year => (
                    <option key={year} value={year}>
                        {year}
                    </option>
                ))}
            </select>
        </section>
    )
}