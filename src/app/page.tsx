"use server"


import { auth } from "../../auth";
import { SingInButton, SingOutButton } from "./component/authButtons";

export default async function Home() {

  const session = await auth();
  console.log(session)
  if(session?.user){
    return (
      <div>
        <p>You are logged in as : {session.user.name}</p>
        <p>Your Email : {session.user.email}</p>
        <SingOutButton />
      </div>
    )
  }
  return (
    <div>
      
      Next Auth
      <p>You are not Singed In</p>
     <SingInButton />
    </div>
  );
}
