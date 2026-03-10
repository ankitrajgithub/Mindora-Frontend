import { ShareIcon } from "../icons/ShareIcon";

export function Card(){
    return <div className="bg-white rounded-md border-gray-200 max-w-72 border">
        <div className="flex justify-between items-center">
            <div className="flex  items-center text-md">
                <div className="pr-2 text-gray-500">
                    <ShareIcon size="md"/>
                </div>
                <div>
                    Giiii
                </div>
            </div>
            <div className="flex">
                <div className="pr-2 text-gray-500">
                    <ShareIcon size="md"/>
                </div>
                <div className="pr-2 text-gray-500">
                    <ShareIcon size="md"/>
                </div>
            </div>
        </div>
    </div>
}