import UserList from "./components/UserList";
import BootStrapButton from "./components/BootStrapButton";
import BootStrapAlert from "./components/BootStrapAlert";
import BootStrapAlertDismissible from "./components/BootStrapAlertDismissible";
import { useState } from "react";
import { ListGroup } from "react-bootstrap";
import MikeListGroup from "./components/MikeListGroup";
import MikeAlert from "./components/MikeAlert";

// Next time pick up at state versus props in the component section of the codewithMosh website. Go back to the MikeListGroup.

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const [BootStrapAlertVisable, setBootstrapAlertVisable]=useState(false)
  return (
  <>
  <UserList />
    {BootStrapAlertVisable && <BootStrapAlert onClose={()=>setBootstrapAlertVisable(false)}/>}
   <BootStrapButton variant ='secondary' onClick={()=>setBootstrapAlertVisable(true)}>BootStrapButtonCreatedByMike</BootStrapButton>
   <BootStrapAlertDismissible/>
   <MikeListGroup items={items} heading={"Cities"}/>
    <MikeAlert>
      Hello <span>World</span>
    </MikeAlert>
   </>
  )
}

export default App;
