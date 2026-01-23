import './Filters.css'

export default function Filters({filters, onChange, categories}) {
    function handleChange(e) {
        const { name, value } = e.target
        onChange(prev => ({...prev, [name]: value}))
    }

    return (
        <section className='filters'>
            <select name="type" value={filters.type} onChange={handleChange}>
                <option value="all">Todos</option>
                <option value="income">Receitas</option>
                <option value="expense">Despesas</option>
            </select>

            <select name="category" value={filters.category} onChange={handleChange}>
                <option value="all">Todas categorias</option>
                {categories.map(category => (
                    <option key={category} value={category}>
                        {category}
                    </option>
                ))}
            </select>

            <select name="order" value={filters.order} onChange={handleChange}>
                <option value="date-desc">Mais recentes</option>
                <option value="date-asc">Mais antigas</option>
                <option value="value-desc">Maior valor</option>
                <option value="value-asc">Menor valor</option>
            </select>
        </section>
    )
}