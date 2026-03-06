import {Button} from "./components/Button";
import { PlusIcon } from "./icons/PlusIcon";

function App() {

  return (
    <>
      <Button variant="primary" size="sm" text="Add Content" startIcon={<PlusIcon size="lg"/>} endIcon="" onClick={()=>{}}></Button>
      <Button variant="secondary" size="sm" text="Add Content" startIcon="" endIcon="" onClick={()=>{}}></Button>
    </>
  )
}

export default App
