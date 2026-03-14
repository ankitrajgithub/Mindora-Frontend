import { useState } from "react";
import {Button} from "./components/Button";
import { Card } from "./components/Card";
import { CreateContentModal } from "./components/CreateContentModal";
import { PlusIcon } from "./icons/PlusIcon";
import { ShareIcon } from "./icons/ShareIcon";
import {Route,Routes,BrowserRouter} from "react-router-dom";
import { Sidebar } from "./components/Sidebar";

function App() {
  const [modalOpen,setModalOpen]=useState(false);
  return (
    <div className="flex">
      <Sidebar/>
      <div className="p-4 ml-74 min-h-screen bg-gray-100 border-r border-gray-200 w-full">
        <CreateContentModal open={modalOpen} onClose={()=>{
          console.log("hii");
          setModalOpen(false);
        }}/>
        <div className="flex justify-end gap-4">
          <Button variant="primary" text="Add Content" startIcon={<PlusIcon size="md"/>} onClick={()=>{
            setModalOpen(true);
          }}></Button>
          <Button variant="secondary" text="Share Brain" startIcon={<ShareIcon size="md"/>} onClick={()=>{}}></Button>
        </div>
        <div className="flex gap-4">
          <Card title="First Tweet" type="twitter" link="https://x.com/ardanlabs/status/1383994937704738820"/>
          <Card title="First Video" type="youtube" link="https://www.youtube.com/watch?v=Tk_txz1fhHo"/>
        </div>
      </div>
    </div>
  )
}

export default App