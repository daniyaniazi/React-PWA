

import React from 'react'
import { Card } from 'react-bootstrap'
const CardComp = ({ user }) => {
    // console.log(user)
    return (

        < Card style={{ margin: 'auto' }
        }>
            <Card.Body>
                <Card.Title>{user.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">@{user.username}</Card.Subtitle>
                <Card.Text>
                    PHONE : {user.phone} <br />
                   EMAIL : {user.email}
                </Card.Text>
                <Card.Link href={`${user.website}`}>Website</Card.Link>

            </Card.Body>
        </Card >
    )
}

export default CardComp
