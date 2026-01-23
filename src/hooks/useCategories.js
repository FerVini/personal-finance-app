import { useEffect, useState } from "react";

const STORAGE_KEY = 'categories';

const DEFAULT_CATEGORIES = [
    'Alimentação',
    'Aluguel',
    'Lazer',
]

export function useCategories() {
    const [categories, setCategories] = useState(() => {
        const stored = localStorage.getItem(STORAGE_KEY);
        return stored ? JSON.parse(stored) : DEFAULT_CATEGORIES;
    })

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(categories))
    }, [categories]);

    function addCategory(category) {
        const normalized = category.trim();

        if (!normalized) return;
        if (categories.includes(normalized)) return;

        setCategories(prev => [...prev, normalized]);
    }

    return {
        categories,
        addCategory
    }
}