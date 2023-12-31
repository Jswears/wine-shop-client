"use client";

import { AuthContext } from "@/context/auth.context";
import { AuthContextType } from "@/types";
import { useContext } from "react";
import { redirect } from "next/navigation";

export default function AuthPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isLoggedIn } = useContext(AuthContext) as AuthContextType;

  if (!isLoggedIn) {
    return <div className="mt-12 h-screen flex">{children}</div>;
  }
  return redirect("/profile");
}
