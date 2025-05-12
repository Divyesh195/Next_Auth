"use client"

import { logIn, logOut } from "@/lib/action/auth";

export const SingInButton = ()=>{
    return <button className="p-1 bg-pink-300 cursor-pointer" onClick={()=>logIn()}>Sing IN</button>
}

export const SingOutButton = ()=>{
    return <button className="p-1 bg-pink-300 cursor-pointer" onClick={()=>logOut()}>Sing Out</button>
}


