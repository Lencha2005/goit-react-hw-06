import React from 'react';
import { useState } from 'react';
import styles from './SearchBox.module.css'


const SearchBox = ({value, onFilter}) => {
       
return (
  <div className={styles.wrap}>
  <p className={styles.text}>Find contacts by name</p>
  <input className={styles.input} type="text" value={value} onChange={onFilter}/>
  </div>
)

}

export default SearchBox