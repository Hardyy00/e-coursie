import { signIn } from "@/auth";
import { Button } from "@/components/ui/button";

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
