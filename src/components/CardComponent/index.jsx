import React, { useState } from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import { Heart } from 'react-bootstrap-icons'
import styles from './CardComponent.module.css'

export const CardComponent = ({ title, year, imdb, header, src, btnText, btnTextLess }) => {
    const [show, setShow] = useState(false)
    const [fill, setFill] = useState(false)

    return (
        <Col>
            <Card border="primary" style={{ width: '18rem' }} className={styles.cardBox}>
            <Heart className={styles.heartIcon} onClick={()=>setFill(!fill)} fill={fill ? 'red': ''} />
                <Card.Img variant="top" src={src} className={styles.cardimgtop} />
                <Card.Header>{header}</Card.Header>
                <Card.Body>
                    <Card.Title className={styles.cardTitle}>{title}</Card.Title>
                    {
                        show ?
                            (
                                <div>
                                    <Card.Text className={styles.text} >Year: {year}</Card.Text>
                                    <Card.Text className={styles.text}>IMDB: {imdb}</Card.Text>
                                </div>
                            )
                            : ''
                    }

                </Card.Body>
                <Button className={styles.readMore} onClick={()=>setShow(!show)} > {show ?btnTextLess : btnText}</Button>
            </Card>
        </Col>
    )
}
