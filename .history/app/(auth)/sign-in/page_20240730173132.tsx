import { signIn } from "@/auth";
import GoogleLogin from "@/components/google-login";
import { Button } from "@/components/ui/button";

const SignInPage = () => {
  return (
    <div className="">
      <form
        className=""
        action={async () => {
          "use server";
          await signIn("google", { redirectTo: "/" });
        }}
      >
        <div className="w-24">
          <GoogleLogin className="w-12" />
        </div>
      </form>
    </div>
  );
};

export default SignInPage;
