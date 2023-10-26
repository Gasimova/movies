import React from 'react'
import { Button, Form } from 'react-bootstrap'

export const SearchComponent = ({name, type, placeholder, className}) => {
    return (
        <Form className="d-flex">
            <Form.Control
                type={type}
                placeholder={placeholder}
                className={className}
            />
            <Button variant="outline-success">{name}</Button>
        </Form>
    )
}
