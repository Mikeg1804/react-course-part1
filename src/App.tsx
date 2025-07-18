import UserList from "./components/UserList";
import BootStrapButton from "./components/BootStrapButton";
import BootStrapAlert from "./components/BootStrapAlert";

function App() {
  return (
  <>
  <UserList />
   <BootStrapButton variant ='secondary' onClick={()=>console.log('Clicked')}>BootStrapButtonCreatedByMike</BootStrapButton>
   <BootStrapAlert/>
   </>
  )
}

export default App;
