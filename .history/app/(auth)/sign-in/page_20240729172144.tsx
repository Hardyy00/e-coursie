import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

const SignInPage = () => {
  return (
    <div>
      <form
        action={async () => {
          "use server";
          await signIn("google");
        }}
      >
        <Button variant={"secondary"}>Sign In</Button>
      </form>
    </div>
  );
};

export default SignInPage;
