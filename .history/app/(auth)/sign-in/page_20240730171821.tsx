import { signIn } from "@/auth";
import { Button } from "@/components/ui/button";
import { GoogleLoginButton } from "react-social-login-buttons";

const SignInPage = () => {
  return (
    <div className="">
      <GoogleLoginButton />
    </div>
  );
};

{
  /* <form
  className=""
  action={async () => {
    "use server";
    await signIn("google", { redirectTo: "/" });
  }}
>
  <Button variant={"primary"} className="">
    Sign In
  </Button>
</form>; */
}

export default SignInPage;
