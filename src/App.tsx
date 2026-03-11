import {Button} from "./components/Button";
import { Card } from "./components/Card";
import { PlusIcon } from "./icons/PlusIcon";
import { ShareIcon } from "./icons/ShareIcon";
import {Route,Routes,BrowserRouter} from "react-router-dom";

function App() {

  return (
    <div className="p-4">
      <div className="flex justify-end gap-4">
        <Button variant="secondary" text="Share Brain" startIcon={<ShareIcon size="md"/>} endIcon="" onClick={()=>{}}></Button>
        <Button variant="primary" text="Add Content" startIcon={<PlusIcon size="md"/>} endIcon="" onClick={()=>{}}></Button>
      </div>
      <div className="flex gap-4">
        <Card title="First Tweet" type="twitter" link="https://x.com/ardanlabs/status/1383994937704738820"/>
        <Card title="First Video" type="youtube" link="https://www.youtube.com/watch?v=Tk_txz1fhHo"/>
      </div>
    </div>
  )
}

export default App