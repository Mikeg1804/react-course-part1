import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import {useState} from 'react';

function BootStrapAlertDismissible() {
  const [show, setShow] = useState(true);
    if (show){
           return (
    <Alert variant="danger" onClose={()=>setShow(false)} dismissible>
      
    </Alert>
  ) 
    }
     
    return (
    <div>
      
    </div>
  )
}

export default BootStrapAlertDismissible
