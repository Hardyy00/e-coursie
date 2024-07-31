import { signIn } from "@/auth";
import GoogleLogin from "@/components/google-login";
import { Button } from "@/components/ui/button";

const SignInPage = () => {
  return (
    <div className="">
      {/* <form
  className=""
  action={async () => {
    "use server";
    await signIn("google", { redirectTo: "/" });
  }}
>
  <Button variant={"primary"} className="">
    Sign In
  </Button>
</form>; */}
    </div>
  );
};

export default SignInPage;
