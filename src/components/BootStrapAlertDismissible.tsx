import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import { useState } from "react";

function BootStrapAlertDismissible() {
  const [show, setShow] = useState(true);
  if (show) {
    return (
      <Alert onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          Change this and that and try again. Tu est mon amour preferer.
          J'espere qu'on poura devloper des relation amical dans le future. Je
          t'aime toujour!
        </p>
      </Alert>
    );
  }

  return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}

export default BootStrapAlertDismissible;
