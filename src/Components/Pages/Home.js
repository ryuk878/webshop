import React from "react";
import "./Home.css";
import { Card, Button, ListGroup, ListGroupItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { dataBase } from "../Data/DataBase";

function Home() {
  return (
    <>
      <Card className="text-center">
        <Card.Header>Drone-shop.nl</Card.Header>
        <Card.Body>
          <Card.Title>
            Welkom bij Drone-shop.nl voor al uw favoriete drones
          </Card.Title>
          <Card.Text>sample text heel veel sample text</Card.Text>
          <LinkContainer to="/Products">
          <Button variant="danger">Bekijk Onze Producten</Button>
          </LinkContainer>
        </Card.Body>
      </Card>

      <div className="Cards">
        {dataBase.featured.map((featured) => (
          <Card className="homeProduct">
            <Card.Img variant="top" src={dataBase[featured].img} />
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text>{dataBase[featured].title}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>{dataBase[featured].Header}</ListGroupItem>

              <ListGroupItem>${dataBase[featured].price},- </ListGroupItem>
            </ListGroup>
            <Card.Body id="Buttons">
              <Button variant="danger">Koop nu</Button>
              <LinkContainer to={dataBase[featured].url}>
                <Button className="btn" variant="danger">
                  Product details
                </Button>
              </LinkContainer>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
}
export default Home;
