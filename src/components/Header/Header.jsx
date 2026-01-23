import { Sun, Moon } from 'lucide-react';
import './Header.css';

export default function Header({onToggleTheme, theme}) {
    const isLight = theme === 'light'

    return (
        <header className='header'>
            <h1>Controle Financeiro Pessoal</h1>

            <button 
                onClick={onToggleTheme} 
                className='theme-toggle'
                aria-label='Alterar tema'
            >
                {isLight ? <Moon size={18} /> : <Sun size={18} />}
                <span>
                    {isLight ? 'Modo escuro' : 'Modo claro'}
                </span>
            </button>
        </header>
    )
}