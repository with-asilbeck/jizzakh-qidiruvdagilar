// import React from 'react'
// import {Card, CardBody, CardTitle, CardSubtitle, CardText, CardImg, Button} from 'reactstrap'
// import './Card.css'

// const CardContainer = ({info}) => {
//   return (
//     <Card
//     className='card-container'
//     style={{backgroundColor: 'rgb(212, 212, 212)'}}
// >
//   <CardBody>
//     <CardImg src={info.img}/>
//     <CardTitle tag="h5">
//       {info.name}
//     </CardTitle>
//     <CardSubtitle
//       className="mb-2 text-muted"
//       tag="h6"
//     >
//       {info.birthdate}<br></br>
//       {info.town}
//     </CardSubtitle>
//     <CardText>
//       {info.reason}
//     </CardText>
//   </CardBody>
// </Card>
//   )
// }

// export default CardContainer;
import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardImg, Button } from 'reactstrap';
import './Card.css';

const CardContainer = ({ info }) => {
  return (
    <Card
      className="card-container"
      style={{ backgroundColor: '#CEECF2', boxShadow: '2px 2px 2px grey' }}
    >
      <CardBody>
        <CardImg src={info.img} />
        <CardTitle tag="h5">
          {info.name}
        </CardTitle>
        <CardSubtitle
          className="mb-2 text-muted"
          tag="h6"
        >
          {info.birthdate}<br />
          {info.town}
        </CardSubtitle>
        <CardText>
          {info.reason}
        </CardText>
      </CardBody>
    </Card>
  );
};

export default CardContainer;
