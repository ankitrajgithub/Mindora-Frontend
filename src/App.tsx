import {Button} from "./components/Button";
import { PlusIcon } from "./icons/PlusIcon";
import { ShareIcon } from "./icons/ShareIcon";

function App() {

  return (
    <div className="flex">
      <Button variant="primary" size="sm" text="Share" startIcon={<ShareIcon size="md"/>} endIcon="" onClick={()=>{}}></Button>
      <Button variant="primary" size="sm" text="Add Content" startIcon={<PlusIcon size="md"/>} endIcon="" onClick={()=>{}}></Button>
    </div>
  )
}

export default App