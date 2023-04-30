import React from 'react'
import styles from "./button.module.scss"

interface Props {
    word: string;    
}
const Button = ({word}:Props) => {
  return (
    <div><button className={styles.btn}>{word}</button></div>
  )
}

export default Button