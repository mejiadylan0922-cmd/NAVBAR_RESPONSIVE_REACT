import logoImg from '../../../assets/Logo.png'
import styles from './logo.module.css'

function Logo({text = 'Aplication', href = '#'}){
    return(
        <a href={href} className={styles.logo}>
            <img src={logoImg} alt={text} className={styles.image}/>
        </a>   
    )
}

export default Logo 
