import UserList from "./components/UserList";
import BootStrapButton from "./components/BootStrapButton";
import BootStrapAlert from "./components/BootStrapAlert";
import BootStrapAlertDismissible from "./components/BootStrapAlertDismissible";
import { useState } from "react";
import { ListGroup } from "react-bootstrap";
import MikeListGroup from "./components/MikeListGroup";

// Next time pick up at conditional randering in the component section of the codewithMosh website.

function App() {
  const [BootStrapAlertVisable, setBootstrapAlertVisable]=useState(false)
  return (
  <>
  <UserList />
    {BootStrapAlertVisable && <BootStrapAlert onClose={()=>setBootstrapAlertVisable(false)}/>}
   <BootStrapButton variant ='secondary' onClick={()=>setBootstrapAlertVisable(true)}>BootStrapButtonCreatedByMike</BootStrapButton>

   <BootStrapAlertDismissible/>
   <MikeListGroup/>
   </>
  )
}

export default App;
