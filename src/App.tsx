import UserList from "./components/UserList";
import BootStrapButton from "./components/BootStrapButton";
import BootStrapAlert from "./components/BootStrapAlert";
import BootStrapAlertDismissible from "./components/BootStrapAlertDismissible";
import { useState } from "react";
import { ListGroup } from "react-bootstrap";
import MikeListGroup from "./components/MikeListGroup";
import MikeAlert from "./components/MikeAlert";
import MikeNavBar from "./components/MikeNavBar";
import MikeCart from "./components/MikeCart";
import MikeNameChanger from "./components/MikeNameChanger";
import MikePizza from "./components/MikePizza";
import MikeCartObjectState from "./components/MikeCartObjectState";

// Next time pick up at updating nested objects in the managing state component section of the codewithMosh website. Go back to the MikeListGroup.

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const [BootStrapAlertVisable, setBootstrapAlertVisable]=useState(false)
  const [cartItems, setCartItems] = useState(["Product1", "Product2"]);
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
    <MikeNavBar cartItemsCount={cartItems.length}/>
    <MikeCart cartItems={cartItems} onClear={()=>setCartItems([])}/>
    <MikeNameChanger/>
    <MikePizza/>
    <MikeCartObjectState/>
   </>
  )
}

export default App;
