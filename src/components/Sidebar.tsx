import { Logo } from "../icons/Logo";
import { XIcon } from "../icons/XIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { SidebarItems } from "./SidebarItems";

export function Sidebar(){
    return <div className="h-screen bg-white border-r border w-76 fixed left-0 top-0">
        <div className="flex text-2xl pt-8 items-center">
            <div className="pr-2 text-purple-600">
                <Logo />
            </div>
            Brainly
        </div>
        <div className="pt-4">
            <SidebarItems text={"X"} icon={<XIcon/>}/>
            <SidebarItems text={"Youtube"} icon={<YoutubeIcon/>}/>
        </div>
    </div>
}