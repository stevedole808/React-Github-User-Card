import React from 'react'
import {
    Card, CardImg,
    CardTitle, CardSubtitle, Col, Container, Row
  } from 'reactstrap';

const Followers = (props) => {
    return (
        <Container>
        <Row>
        <div >
            <Col style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}} >
            {props.userData.map(props => (
                <Card style={{border: ' solid 4px yellow', padding: '1rem', margin: '1rem', width: '25%', backgroundColor: 'pink'}}>
                 <CardTitle>User Github Card</CardTitle>
                 <CardSubtitle>User Name: {props.login}</CardSubtitle>
                 <CardImg src={props.avatar_url} width='100%' />
                </Card>
            ))}
            </Col>
        </div>
        </Row>
        </Container>
      );
}

export default Followers

// style={{display: 'flex', flexDirection: 'row',}}