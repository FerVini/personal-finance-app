import { forwardRef, useEffect, useState } from 'react';
import { Check, X, Loader } from 'lucide-react';
import './TransactionForm.css';

const INITIAL_FORM_STATE = {
  type: 'expense',
  description: '',
  amount: '',
  category: '',
  date: ''
};

const TransactionForm = forwardRef(function TransactionForm(
  {
    categories = [],
    onCreateCategory,
    onSubmit,
    initialData,
    onCancel,
    onError
  },
  ref
) {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCreatingCategory, setIsCreatingCategory] = useState(false);
  const [newCategory, setNewCategory] = useState('');

  /* ------------------------------------------------------------------
   * Sync formulário com edição ou reset
   * ------------------------------------------------------------------ */
  useEffect(() => {
    if (initialData) {
      setFormData({
        id: initialData.id,
        type: initialData.type,
        description: initialData.description,
        amount: initialData.amount,
        category: initialData.category,
        date: initialData.date
      });
    } else {
      setFormData({
        ...INITIAL_FORM_STATE,
        category: categories[0] ?? ''
      });
    }
  }, [initialData, categories]);

  /* ------------------------------------------------------------------
   * Handlers
   * ------------------------------------------------------------------ */
  function handleChange(event) {
    const { name, value } = event.target;

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }

  function validateForm() {
    if (!formData.description.trim()) {
      return 'Descrição é obrigatória';
    }

    if (!formData.amount || Number(formData.amount) <= 0) {
      return 'Informe um valor válido';
    }

    if (!formData.date) {
      return 'Data é obrigatória';
    }

    return '';
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (isSubmitting) return;

    const categoryToUse = isCreatingCategory
      ? newCategory.trim()
      : formData.category;

    if (!categoryToUse) {
      onError('Informe uma categoria válida.');
      return;
    }

    const errorMessage = validateForm();
    if (errorMessage) {
      onError(errorMessage);
      return;
    }

    // Evita duplicação de categorias
    if (
      isCreatingCategory &&
      categories.some(
        c => c.toLowerCase() === categoryToUse.toLowerCase()
      )
    ) {
      onError('Essa categoria já existe.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      if (isCreatingCategory) {
        onCreateCategory(categoryToUse);
      }

      onSubmit({
        ...formData,
        category: categoryToUse,
        amount: Number(formData.amount)
      });

      if (!initialData) {
        setFormData({
          ...INITIAL_FORM_STATE,
          category: categoryToUse
        });
      }

      setIsCreatingCategory(false);
      setNewCategory('');
      setIsSubmitting(false);
    }, 300);
  }

  /* ------------------------------------------------------------------
   * Render
   * ------------------------------------------------------------------ */
  return (
    <section
      ref={ref}
      className={`form-section ${initialData ? 'editing' : ''}`}
    >
      <h2>
        {initialData ? 'Editar Transação' : 'Nova transação'}
      </h2>

      <form onSubmit={handleSubmit} className="transaction-form">
        <div className="form-row">
          <div className="form-group">
            <label>Tipo</label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
            >
              <option value="income">Receita</option>
              <option value="expense">Despesa</option>
            </select>
          </div>

          <div className="form-group">
            <label>Categoria</label>
            <select
              name="category"
              value={isCreatingCategory ? '__new__' : formData.category}
              onChange={(e) => {
                if (e.target.value === '__new__') {
                  setIsCreatingCategory(true);
                  setFormData(prev => ({ ...prev, category: '' }));
                } else {
                  setIsCreatingCategory(false);
                  setFormData(prev => ({ ...prev, category: e.target.value }));
                }
              }}
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}

              <option value="__new__">+ Nova categoria</option>
            </select>

            {isCreatingCategory && (
              <input
                type="text"
                placeholder="Nome da nova categoria"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                autoFocus
              />
            )}
          </div>
        </div>

        <div className="form-group">
          <label>Descrição</label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Ex: Supermercado"
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Valor</label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              placeholder="0,00"
            />
          </div>

          <div className="form-group">
            <label>Data</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader size={16} />
                Salvando
              </>
            ) : (
              <>
                <Check size={16} />
                {initialData ? 'Salvar alterações' : 'Adicionar transação'}
              </>
            )}
          </button>

          {initialData && (
            <button
              type="button"
              className="secondary"
              onClick={onCancel}
            >
              <X size={16} />
              Cancelar
            </button>
          )}
        </div>
      </form>
    </section>
  );
});

export default TransactionForm;
