import React, { useState, useEffect } from 'react'
import { Col, Row, Container, Alert } from "react-bootstrap";
import CardComp from "./card";
const Users = () => {
    const [data, setData] = useState([]);
    const [onlineMode, setonlineMode] = useState(true);
    useEffect(() => {
        let url = "https://jsonplaceholder.typicode.com/users"
        fetch(url).then((response) => {
            response.json().then((result) => {
                //  console.log(result)
                setData(result)
                localStorage.setItem("users", JSON.stringify(result))
            }).catch(err => {
                console.log(err)
            })
        }).catch((err) => {
            setonlineMode(false)
            let collection = localStorage.getItem('users')
            setData(JSON.parse(collection))
        })
    }, []);
    return (

        <div style={{ marginTop: 20 }}>
            {
                !onlineMode ?
                    <Alert variant="danger">
                        You are in Offline Mode
                    </Alert> :
                    null
            }
            <Container fluid>

                <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
                    {data.map((user) => (
                        <Col xs={12} sm={6} md={4} style={{ marginBottom: 20 }} key={user.id}>
                            <CardComp user={user} />
                        </Col>
                    ))}

                </Row>

            </Container>
        </div>
    )
}

export default Users
