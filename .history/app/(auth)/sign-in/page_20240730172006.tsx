import { signIn } from "@/auth";
import GoogleLogin from "@/components/google-login";
import { Button } from "@/components/ui/button";

const SignInPage = () => {
  return (
    <div className="">
      <GoogleLogin />
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
