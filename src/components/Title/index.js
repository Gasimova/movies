import React from 'react'
import { Badge } from 'react-bootstrap'
import styles from './Title.module.css'

export const Title = () => {
  return (
    <h2>
      <Badge bg='light' className={styles.title}>Lorem ipsum </Badge>
    </h2>
  )
}
