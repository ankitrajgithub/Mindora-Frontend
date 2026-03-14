import { ReactElement } from "react";

export function SidebarItems({text, icon}:{
    text:string,
    icon:ReactElement
}){
    return <div className="flex items-center text-gray-700 ">
        <div className="p-2">
            {icon}
        </div>
        <div className="p-2">
            {text}
        </div>
    </div>
}