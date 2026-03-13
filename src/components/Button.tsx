import {ReactElement} from "react";

interface ButtonProps {
    variant:"primary"|"secondary",
    text:string,
    startIcon?:ReactElement | any,
    endIcon?:ReactElement | any,
    onClick?:()=>void
}

const variantStyles={
    "primary":"bg-purple-600 text-white",
    "secondary":"bg-purple-200 text-purple-600"
}

const defaultStyles="px-4 py-2 rounded-md flex justify-center items-center font-light"

export const Button=(props:ButtonProps)=>{
    return <button onClick={props.onClick} className={`${variantStyles[props.variant]} ${defaultStyles}`}>{props.startIcon ? <div className="pr-2">{props.startIcon}</div>:null}{props.text}{props.endIcon}</button>
}