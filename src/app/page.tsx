"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  // const {data : session} = useSession()
  return (
    <div className="flex flex-col items-center gap-2 mt-3">
      <p className="text-center">NEXT Auth Project</p>

      <button
        onClick={() => signIn("google")}
        className="p-2 bg-blue-600 text-white w-fit rounded-sm cursor-pointer"
      >
        Sign in with Google
      </button>
    </div>
  );
}
