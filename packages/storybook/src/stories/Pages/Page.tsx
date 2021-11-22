import React from "react";

interface PageProps {
  user?: {};
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

export const Page = ({
  user,
  onLogin,
  onLogout,
  onCreateAccount
}: PageProps) => <article></article>;
