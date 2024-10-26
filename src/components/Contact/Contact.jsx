import { HiPhone } from "react-icons/hi2";
import { HiUser } from "react-icons/hi2";
import styles from './Contact.module.css'


const Contact = ( {id, name, number, onDeleteUser} ) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.wrapper}>
      <p className={styles.name}><HiUser /> {name}</p>
      <p className={styles.number}><HiPhone /> {number}</p> 
      </div>
      <button type='button' className={styles.btn} onClick={() => onDeleteUser(id)}>Delete</button>
    </div>
  )
}

export default Contact