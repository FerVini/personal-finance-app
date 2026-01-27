import {
    PieChart,
    Pie,
    Tooltip,
    ResponsiveContainer,
    Cell,

} from 'recharts';

const COLORS = ['#6366f1', '#22c55e', '#f97316', '#ef4444', '#06b6d4']

export default function ExpensesByCategoryChart({ data }) {
    if (!data.length) {
        return <p>Nenhuma despesa registrada.</p>
    }

    return (
        <div className='chart-cart'>
            <h3>Gastos por categoria</h3>

            <ResponsiveContainer width='100%' height={260}>
                <PieChart>
                    <Pie
                        data={data}
                        dataKey='total'
                        nameKey='category'
                        innerRadius={60}
                        outerRadius={90}
                        paddingAngle={4}
                    >
                        {data.map((_, index) => (
                            <Cell
                                key={index}
                                fill={COLORS[index % COLORS.length]}
                            />
                        ))}
                    </Pie>

                    <Tooltip
                        formatter={(value) =>
                            new Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                            }).format(value)
                        } />
                </PieChart>
            </ResponsiveContainer>
        </div>
    )
}