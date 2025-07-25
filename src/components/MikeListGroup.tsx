import { ListGroup, ListGroupItem } from "react-bootstrap";
import { MouseEvent } from "react";

function mikeListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  //Event handler function. the : MounseEvent is to specify what type of event is this.
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <ListGroup>
      {items.length === 0 && <p> No item found</p>}
      {items.map((item, index) => (
        <ListGroupItem key={item} onClick={handleClick}>
          {item}
        </ListGroupItem>
      ))}
    </ListGroup>
  );
}

export default mikeListGroup;
