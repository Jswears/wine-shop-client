"use client";

import { AuthContext } from "@/context/auth.context";
import { AuthContextType } from "@/types";
import { useContext } from "react";

export default function ProfilePageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isLoggedIn } = useContext(AuthContext) as AuthContextType;

  return <div className="mt-12 h-screen flex">{children}</div>;
}
