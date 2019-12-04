import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle,
  } from 'reactstrap';
  
const UserCard = (props) => {
return (
        <div>
        <Card style={{border: ' solid 1px blue', padding: '1rem', margin: '1rem', backgroundColor: 'gold'}}>
        <CardTitle style={{color: 'red'}}>User Github Card</CardTitle>
        <CardSubtitle>User Name: {props.card.login}</CardSubtitle>
            <CardImg src={props.card.avatar_url} />
            <CardBody>
            <CardText>Followers: {props.card.followers}</CardText>
            <CardText>Following: {props.card.following}</CardText>
            </CardBody>
        </Card>
        </div>
    );
};
  
  export default UserCard;
