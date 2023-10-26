import React from 'react'
import { CardGroup, Container, Row } from 'react-bootstrap'
import { movies } from '../data'
import { CardComponent } from './index'
import styles from './CardComponent.module.css'
export const CardsGroup = () => {
    const data = movies.Search
    return (
        <CardGroup>
            <Container >
                <Row className={styles.customGap}>
                    {
                        data.length ?
                            data.map((movie) => {
                                return <CardComponent key={movie.imdbID} title={movie.Title} src={movie.Poster} year={movie.Year} imdb={movie.imdbID} btnText='Read more ..' btnTextLess='Less ..' />
                            }) : ''
                    }
                </Row>
            </Container>
        </CardGroup>
    )
}
