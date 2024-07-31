"use client";

import { GoogleLoginButton } from "react-social-login-buttons";

export default function GoogleLogin({
  className,
}: {
  className: string | undefined;
}) {
  return <GoogleLoginButton className={className || ""} />;
}
