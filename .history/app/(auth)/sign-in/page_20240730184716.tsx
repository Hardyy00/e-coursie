import { signIn } from "@/auth";
import GoogleButton from "@/components/google-button";

import { Button } from "@/components/ui/button";

const SignInPage = () => {
  return (
    <div className="bg-white text-primary-foreground p-4 rounded-lg">
      <h1 className="text-2xl font-extrabold">Sign In</h1>
    </div>
  );
};

{
  /* <form
        className="p-6"
        action={async () => {
          "use server";
          await signIn("google", { redirectTo: "/" });
        }}
      >
        <GoogleButton />
      </form> */
}

export default SignInPage;
