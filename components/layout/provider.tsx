"use client";

import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
const queryClient = new QueryClient();

interface ProvidersProps {
  children: React.ReactNode;
  session: Session | null;
}

const Providers = ({ children, session }: ProvidersProps) => {
  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </SessionProvider>
  );
};

export default Providers;
