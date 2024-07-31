import { signIn } from "@/auth";
import { Button } from "@/components/ui/button";

const SignInPage = () => {
  return (
    <div>
      <form
        className="p-6"
        action={async () => {
          "use server";
          await signIn("google", { redirectTo: "/" });
        }}
      >
        <Button variant={"primary"} className="">
          Sign In
        </Button>
      </form>
    </div>
  );
};

export default SignInPage;
