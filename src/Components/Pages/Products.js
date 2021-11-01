import React from 'react'
import { Card, Button, ListGroup, ListGroupItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { dataBase } from "../Data/DataBase";
import "./Products.css";

 function Products() {
    return (
        <>
      <div className="Cards2">
        {dataBase.all.map((all) => (
          <Card className="homeProduct">
            <Card.Img variant="bottom" src={dataBase[all].img} />
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text>{dataBase[all].title}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>{dataBase[all].Header}</ListGroupItem>

              <ListGroupItem>${dataBase[all].price},- </ListGroupItem>
            </ListGroup>
            <Card.Body id="Buttons">
              <Button variant="danger">Koop nu</Button>
              <LinkContainer to={dataBase[all].url}>
                <Button className="btn" variant="danger">
                  Product details
                </Button>
              </LinkContainer>
            </Card.Body>
          </Card>
        ))}
      </div>
        </>
    )
}
export default Products