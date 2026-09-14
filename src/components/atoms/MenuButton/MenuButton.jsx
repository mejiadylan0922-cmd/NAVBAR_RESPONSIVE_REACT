import styles from './MenuButton.module.css'

function MenuButton({ onClick, isOpen = false }) {
    return (
        <button
        type='button'
        className={styles.button}
        onClick={onClick}
        aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={isOpen}
        >
            <span>&#9776;</span>
        </button>
    )
}

export default MenuButton