import {Button} from "./components/Button";
import { Card } from "./components/Card";
import { PlusIcon } from "./icons/PlusIcon";
import { ShareIcon } from "./icons/ShareIcon";
import {Route,Routes,BrowserRouter} from "react-router-dom";

function App() {

  return (
    <div>
      <Button variant="secondary" text="Share Brain" startIcon={<ShareIcon size="md"/>} endIcon="" onClick={()=>{}}></Button>
      <Button variant="primary" text="Add Content" startIcon={<PlusIcon size="md"/>} endIcon="" onClick={()=>{}}></Button>
      <Card/>
      <BrowserRouter>
        <Routes>
          <Route/>
          <Route/>
          <Route path="/dashboard"/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App