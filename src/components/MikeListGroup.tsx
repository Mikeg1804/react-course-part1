import { useState } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
// import { MouseEvent } from "react";

//{items: [], heading: string}
interface Props {
  items: string[];
  heading: string;
}

function mikeListGroup({items, heading}:Props) {
  

  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
    <h1>{heading}</h1>
    <ListGroup as="ul">
      {items.length === 0 && <p> No item found</p>}
      {items.map((item, index) => (
        <ListGroupItem
          as="li"
          active={selectedIndex === index}
          key={item}
          onClick={() => {
            setSelectedIndex(index);
          }}
        >
          {item}
        </ListGroupItem>
      ))}
    </ListGroup>
    </>
  );
}

export default mikeListGroup;
