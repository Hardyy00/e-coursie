"use client";

import { GoogleLoginButton } from "react-social-login-buttons";

export default function GoogleLogin({ className }: { className?: string }) {
  return <GoogleLoginButton className={className || ""} />;
}