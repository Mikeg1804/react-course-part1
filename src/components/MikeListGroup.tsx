import { ListGroup, ListGroupItem } from "react-bootstrap";

function mikeListGroup() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "paris"];

  return (
    <ListGroup>
      {items.map((item) => (
        <ListGroupItem key ={item}>{item}</ListGroupItem>
      ))}
    </ListGroup>
  );
}

export default mikeListGroup;
