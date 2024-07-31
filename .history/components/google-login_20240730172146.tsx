"use client";

import { GoogleLoginButton } from "react-social-login-buttons";

export default function GoogleLogin({
  className,
}: {
  children: React.ReactNode;
}) {
  return <GoogleLoginButton className={className || ""} />;
}
