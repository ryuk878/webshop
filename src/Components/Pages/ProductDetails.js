import React from 'react'
import { useParams } from 'react-router-dom'
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import "./ProductDetail.css";
import { LinkContainer } from "react-router-bootstrap";
import { dataBase } from '../Data/DataBase';

 function ProductDetails( ) {

     let  {id} = useParams()
     console.log(useParams())
     


    return (
<>
      
      <Card className="text-center">

        <Card.Body>
          <Card.Title>
          <Card.Title>
            
          </Card.Title>
          <Card.Text>sample text heel veel sample text</Card.Text>
      
          </Card.Title>
          <Button variant="danger">Koop nu</Button>
        </Card.Body>
      </Card>
      <div className="Cards">
  

        <Card className="productCard">
          <Card.Img src ={dataBase[id].img} />
          <Card.Body>
            <Card.Title>{dataBase[id].title}</Card.Title>
            <Card.Text>
            {dataBase[id].description}
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>{dataBase[id].Header}</ListGroupItem>
            <ListGroupItem>{dataBase[id].ProductDetail}</ListGroupItem>
            <ListGroupItem>${dataBase[id].price},-</ListGroupItem>
          </ListGroup>
          <Card.Body id ="Buttons">
          
            <LinkContainer to="/ProductDetails/">
            <Button variant="danger">Koop nu</Button>
            </LinkContainer>
          </Card.Body>
        </Card>



       
      </div>
    </>
    )
}
export default ProductDetails