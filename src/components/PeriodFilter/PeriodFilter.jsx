import './PeriodFilter.css';

const MONTHS = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril',
  'Maio', 'Junho', 'Julho', 'Agosto',
  'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];

export default function PeriodFilter({ period, onChange }) {
  const years = Array.from(
    { length: 6 },
    (_, i) => new Date().getFullYear() - i
  );

  function handleChange(e) {
    const { name, value } = e.target;

    onChange(prev => ({
      ...prev,
      [name]: value === 'all' ? 'all' : Number(value)
    }));
  }

  return (
    <section className="period-filter">
      <select
        name="month"
        value={period.month}
        onChange={handleChange}
      >
        <option value="all">Todos os meses</option>
        {MONTHS.map((label, index) => (
          <option key={index} value={index}>
            {label}
          </option>
        ))}
      </select>

      <select
        name="year"
        value={period.year}
        onChange={handleChange}
      >
        <option value="all">Todos os anos</option>
        {years.map(year => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </section>
  );
}
