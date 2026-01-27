import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from 'recharts';

export default function MonthlyExpensesChart({ data }) {
  if (!data.length) {
    return <p>Nenhuma despesa registrada.</p>;
  }

  return (
    <div className="chart-card">
      <h3>Evolução mensal de despesas</h3>

      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />

          <YAxis
            tickFormatter={(value) =>
              new Intl.NumberFormat('pt-BR', {
                notation: 'compact'
              }).format(value)
            }
          />

          <Tooltip
            formatter={(value) =>
              new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(value)
            }
          />

          <Line
            type="monotone"
            dataKey="total"
            stroke="#ef4444"
            strokeWidth={2}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
