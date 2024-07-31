import { signIn } from "@/auth";
import { Button } from "@/components/ui/button";

const SignInPage = () => {
  return (
    <div>
      <form
        action={async () => {
          "use server";
          await signIn("google", { redirectTo: "/" });
        }}
      >
        <Button variant={"primary"} className="">
          Sign In
        </Button>

        <button className="text-blue-600">hii</button>
      </form>
    </div>
  );
};

export default SignInPage;
